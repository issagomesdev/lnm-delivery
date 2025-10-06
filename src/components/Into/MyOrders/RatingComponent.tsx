'use client'

import React, { useState } from 'react';
import { Overlay, ModalBox, CancelButton, ConfirmButton } from '@/components/shared/Modal/styles';
import { Title, RatingRow, Stars, CommentBox, BottomRow, SecondModal, SecondModalContent } from "./styles"
import { Icon } from '@iconify/react';

interface RatingComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const criteria = [
    'Qualidade do produto',
    'Qualidade da embalagem',
    'Tempo de entrega',
    'Custo benefício'
];

export default function RatingComponent({ isOpen, onClose }: RatingComponentProps) {

    const [ratings, setRatings] = useState<Record<string, number>>({});
    const [comment, setComment] = useState('');
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
    const [commentModalOpen, setCommentModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const handleRating = (item: string, value: number) => {
        setRatings(prev => ({ ...prev, [item]: value }));
    };

    const handleCommentConfirm = (value: string) => {
        setComment(value);
        setCommentModalOpen(false);
    };

    const evaluateOrder = () => {
        setConfirmModalOpen(true);
    }

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value;

        value = value.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
            ""
        );

        value = value.replace(/[^a-zA-Z0-9À-ÿ\s.,!?;:'"()-]/g, "");

        if (value.length > 400) {
            value = value.slice(0, 400);
        }

        setComment(value)
    };

    if (!isOpen) return null

    return (
        <Overlay>
            <ModalBox>
                <Title>AVALIE SEU PEDIDO</Title>
                {criteria.map(item => (
                    <RatingRow key={item}>
                        <span>{item}</span>
                        <Stars>
                            {[1, 2, 3, 4, 5].map(star => (
                                <Icon
                                    key={star}
                                    icon={ratings[item] >= star ? 'material-symbols:star' : 'material-symbols:star-outline'}
                                    color="gold"
                                    width="24"
                                    onClick={() => handleRating(item, star)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </Stars>
                    </RatingRow>
                ))}

                <CommentBox onClick={() => setCommentModalOpen(true)}>
                    <p>Algum comentário?</p>
                    <span>Clique aqui</span>
                </CommentBox>

                <BottomRow>
                    <CancelButton onClick={onClose}>Fechar</CancelButton>
                    <ConfirmButton onClick={() => evaluateOrder()}>Avaliar</ConfirmButton>
                </BottomRow>
            </ModalBox>

            {commentModalOpen && (
                <SecondModal>
                    <SecondModalContent keyboardOpen={keyboardOpen}>
                        <h4>Algum comentário?</h4>
                        <textarea
                            placeholder="Digite seu comentário"
                            value={comment}
                            onChange={handleComment}
                            onFocus={() => {
                                if (isTouchDevice) setKeyboardOpen(true);
                            }}
                            onBlur={() => {
                                if (isTouchDevice) setKeyboardOpen(false);
                            }}
                        />
                        <small style={{ width: '100%', display: 'block', textAlign: 'right' }}>
                            {comment.length}/400 caracteres
                        </small>
                        <BottomRow>
                            <CancelButton onClick={() => { setCommentModalOpen(false); setComment('') }}>Fechar</CancelButton>
                            <ConfirmButton onClick={() => handleCommentConfirm(comment)}>Concluir</ConfirmButton>
                        </BottomRow>
                    </SecondModalContent>
                </SecondModal>
            )}

            {confirmModalOpen && (
                <SecondModal>
                    <SecondModalContent>
                        <span>Avaliação realizada com sucesso</span>
                        <BottomRow>
                            <ConfirmButton onClick={() => {
                                setConfirmModalOpen(false);
                                setComment('')
                                onClose()
                            }}>Ok</ConfirmButton>
                        </BottomRow>
                    </SecondModalContent>
                </SecondModal>
            )}
        </Overlay>
    );
}