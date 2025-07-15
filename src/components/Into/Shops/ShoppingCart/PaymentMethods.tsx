'use client';

import { useState } from 'react';
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
import { on } from 'events';

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

export const PaymentMethods = ({ isOpen, onClose, productsTotal, handleData }: { isOpen: boolean; onClose: () => void, productsTotal: any, handleData:any }) => {
    const [coupon, setCoupon] = useState('');
    const [couponInvalid, setCouponInvalid] = useState(false);
    const [paymentType, setPaymentType] = useState<'entrega' | 'online'>('entrega');
    const [method, setMethod] = useState('');
    const [hasObservation, setHasObservation] = useState(false);
    const [observation, setObservation] = useState('');
    const [needChange, setNeedChange] = useState(true);
    const [changeFor, setChangeFor] = useState<number>(0);
    const [alertData, setAlertData] = useState<{ isOpen: boolean; title: string; message: string }>({ isOpen: false, title: '', message: '' });

    const handleRequest = () => {
        if (method === 'Dinheiro' && (needChange && changeFor === 0)) {
            setAlertData({
                isOpen: true,
                title: 'Opss!',
                message: 'Por favor, antes de continuar informe se você precisa ou não de troco.'
            });
            return;
        }

        if (method === 'Dinheiro' && (needChange && Number(productsTotal) > changeFor)) {
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
            changeFor
        });

        onClose();

    }

    const resetAll = () => {
        setPaymentType('entrega');
        setMethod('');
        setCoupon('');
        setCouponInvalid(false);
        setHasObservation(false);
        setObservation('');
        setNeedChange(true);
        setChangeFor(0);
        setAlertData({ isOpen: false, title: '', message: '' });
        onClose();
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
        <Overlay>
            <ModalBox style={{ height: '95%', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton $return={true} onClick={() => {
                    resetAll();
                    onClose();
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
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </PaymentSelect>
                    </PaymentField>

                    {method === 'Dinheiro' && (
                        <PaymentField>
                            <SectionTitle>Precisa de troco?</SectionTitle>
                            {needChange && (
                                <ChangeBox>
                                    <Icon icon="mdi:cash" width={20} />
                                    <NumericFormat
                                        value={changeFor}
                                        onValueChange={({ floatValue }) => {
                                            console.log(floatValue);
                                            setChangeFor(floatValue ?? 0);
                                        }}
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        prefix="R$ "
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
