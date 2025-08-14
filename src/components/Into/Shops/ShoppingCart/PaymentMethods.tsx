'use client';

import { useEffect, useRef, useState } from 'react';
import { Title, Overlay, ModalBox, Label, Content, CloseXButton } from '@/components/shared/Modal/styles';
import { NumericFormat } from 'react-number-format';
import { Icon } from '@iconify/react';
import {
    CouponBox,
    ValidateButton,
    SectionTitle,
    PaymentOption,
    PaymentSelect,
    PaymentText,
    ObservationToggle,
    ObservationTextarea,
    SubmitButton,
    PaymentField,
    ChangeBox
} from './styles';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import { useRouter } from 'next/navigation';

const paymentOptions = [
    'Dinheiro',
    'Visa Crédito',
    'MasterCard Crédito',
    'Visa Débito',
    'MasterCard Débito',
    'Elo Crédito',
    'Elo Débito',
    'VR Refeição',
    'Sodexo Refeição',
    'Pix - QR Code na máquina'
];

export const PaymentMethods = ({ isOpen, onClose, total, handleData }: { isOpen: boolean; onClose: (step: 1 | null) => void, total: number, handleData: any }) => {
    const router = useRouter()
    const [coupon, setCoupon] = useState('');
    const [couponInvalid, setCouponInvalid] = useState(false);
    const [paymentType, setPaymentType] = useState<'entrega' | 'online'>('entrega');
    const [method, setMethod] = useState('');
    const [hasObservation, setHasObservation] = useState(false);
    const [observation, setObservation] = useState('');
    const [needChange, setNeedChange] = useState(true);
    const [changeFor, setChangeFor] = useState<{ value: number; label: string }>({
        value: 0,
        label: ''
    });
    const [alertData, setAlertData] = useState<{ isOpen: boolean; title: string; message: string }>({ isOpen: false, title: '', message: '' });

    const inputRef = useRef<HTMLInputElement>(null);


    const handleChange = (val: string) => {
        const onlyNumbers = val.replace(/\D/g, '');
        const padded = onlyNumbers.length < 3
            ? onlyNumbers.padStart(3, '0')
            : onlyNumbers;

        const floatValue = Number(padded) / 100;

        console.log(floatValue)

        setChangeFor({
            value: floatValue,
            label: floatValue === 0? '' : `R$ ${floatValue.toFixed(2).replace('.', ',')}`
        });
    };

    const handleCaretToEnd = () => {
        if (inputRef.current) {
            const len = inputRef.current.value.length;
            inputRef.current.setSelectionRange(len, len);
        }
    };



    const handleRequest = () => {

        if (!method) {
            setAlertData({
                isOpen: true,
                title: 'Opss!',
                message: 'Por favor, antes de continuar selecione a forma de pagamento.'
            });
            return;
        }

        if (method === 'Dinheiro' && (needChange && changeFor.value === 0)) {
            setAlertData({
                isOpen: true,
                title: 'Opss!',
                message: 'Por favor, antes de continuar informe se você precisa ou não de troco.'
            });
            return;
        }

        if (method === 'Dinheiro' && (needChange && total > changeFor.value)) {
            setAlertData({
                isOpen: true,
                title: 'Erro',
                message: 'O valor do troco dever ser maior ou igual o total do pedido.'
            });
            return;
        }

        if (!validateCoupon()) {
            return
        }

        handleData({
            paymentType,
            method,
            coupon: coupon,
            observation,
            changeFor: changeFor.value
        });

    }

    const resetAll = () => {
        setPaymentType('entrega');
        setMethod('');
        setCoupon('');
        setCouponInvalid(false);
        setHasObservation(false);
        setObservation('');
        setNeedChange(true);
        setChangeFor({
            value: 0,
            label: ""
        });
        setAlertData({ isOpen: false, title: '', message: '' });
        onClose(null);
    }

    const validateCoupon = () => {
        if (coupon.trim().length > 0 && coupon !== 'abc123') {
            setAlertData({
                isOpen: true,
                title: 'Ops',
                message: 'Cupom inexistente ou com grafia incorreta.'
            });

            setCouponInvalid(true);

            return false
        }

        setCouponInvalid(false);
        return true
    }

    if (!isOpen) return null;

    return (
        <Overlay style={{ backgroundColor: 'rgb(0 0 0 / 87%)' }}>
            <ModalBox style={{ height: 'fit-content', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton $return={true} onClick={() => {
                    resetAll();
                    onClose(1);
                }}>
                    <Icon icon="solar:alt-arrow-left-outline" color="#fff" width="30" />
                </CloseXButton>

                <Title style={{ margin: 0 }}>Formas de pagamento</Title>

                <Content>
                    <PaymentField>
                        <CouponBox valid={!couponInvalid}>
                            <Icon icon="mdi:ticket-percent-outline" width={20} />
                            <input
                                placeholder="Digite o cupom"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <ValidateButton onClick={validateCoupon}>Validar</ValidateButton>
                        </CouponBox>
                    </PaymentField>

                    <PaymentField>
                        <SectionTitle>Forma de pagamento</SectionTitle>
                        <PaymentOption>
                            <input
                                type="checkbox"
                                checked={paymentType === 'entrega'}
                                onChange={() => setPaymentType('entrega')}
                            />
                            <PaymentText>Pagar na entrega</PaymentText>
                        </PaymentOption>

                        <PaymentOption>
                            <input type="checkbox" disabled />
                            <PaymentText style={{ color: '#999' }}>Pagamento online (não disponível)</PaymentText>
                        </PaymentOption>

                        <PaymentSelect value={method} onChange={(e) => setMethod(e.target.value)}>
                            <option value="">Selecione</option>
                            {paymentOptions.map((option) => (
                                <option key={option} value={option}>{option} (R${total.toFixed(2)})</option>
                            ))}
                        </PaymentSelect>
                    </PaymentField>

                    {method === 'Dinheiro' && (
                        <PaymentField>
                            <SectionTitle>Precisa de troco?</SectionTitle>
                            {needChange && (
                                <ChangeBox>
                                    <Icon icon="mdi:cash" width={20} />
                                    <input
                                        ref={inputRef}
                                        value={changeFor.label}
                                        onChange={(e) => handleChange(e.target.value)}
                                        onFocus={handleCaretToEnd}
                                        onClick={handleCaretToEnd}
                                        placeholder="Pra quanto?"
                                    />
                                </ChangeBox>
                            )}
                            <PaymentOption>
                                <input
                                    type="checkbox"
                                    checked={!needChange}
                                    onChange={() => setNeedChange((prev) => !prev)}
                                />
                                <PaymentText>Não preciso de troco</PaymentText>
                            </PaymentOption>
                        </PaymentField>
                    )}

                    <PaymentField>
                        <ObservationToggle>
                            <p>Alguma observação extra?</p>
                            <input
                                type="checkbox"
                                checked={hasObservation}
                                onChange={() => setHasObservation(!hasObservation)}
                            />
                        </ObservationToggle>

                        {hasObservation && (
                            <PaymentField>
                                <ObservationTextarea
                                    value={observation}
                                    onChange={(e) => setObservation(e.target.value)}
                                />
                                <span>Evite utilizar este campo para incluir ou trocar ingredientes. Isso pode alterar o valor do seu pedido em relação ao informado no aplicativo.</span>
                            </PaymentField>
                        )}
                    </PaymentField>

                    <SubmitButton onClick={handleRequest}>Enviar pedido</SubmitButton>
                </Content>
            </ModalBox>

            <ModalComponent
                width={350}
                isOpen={alertData.isOpen}
                onConfirm={() => setAlertData({ isOpen: false, title: '', message: '' })}
                onConfirmText={"Ok, entendi"}
                title={alertData.title}
            >
                <Label>{alertData.message}</Label>
            </ModalComponent>
        </Overlay>
    );
};
