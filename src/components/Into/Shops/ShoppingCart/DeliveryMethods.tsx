
import { Title, Overlay, ModalBox, Content, CloseXButton, Label, CancelButton, ConfirmButton, ButtonGroup } from '@/components/shared/Modal/styles';
import { Icon } from '@iconify/react';
import { addressesData } from '../../data';
import { useEffect, useState } from 'react';
import AddressFormComponent from '../../MyAddresses/AddressFormComponent';
import { MethodWrapper, Select, NewAddressButton, PriceSummary, PaymentButton, AddressField, CustomCheckbox, ConfirmDelivery, ConfirmDeliveryContent } from './styles';
import ModalComponent from '@/components/shared/Modal/ModalComponent';

export const DeliveryMethods = ({ isOpen, onClose, productsTotal, handleData }: { isOpen: boolean; onClose: (step: 2 | null) => void, productsTotal: any, handleData: any }) => {

    const [addresses, setAddresses] = useState<any[]>(addressesData);
    const [deliveryMethod, setDeliveryMethod] = useState<'entrega' | 'retirada'>('entrega');
    const [selectedAddress, setSelectedAddress] = useState<any>();
    const [newAddressIsOpen, setNewAddressIsOpen] = useState(false);
    const [deliveryFee, setDeliveryFee] = useState<number>(0);
    const [adressIncompatibleIsOpen, setAdressIncompatibleIsOpen] = useState(false);
    const [confirmDeliveryIsOpen, setConfirmDeliveryIsOpen] = useState(false);
    const isRetirada = deliveryMethod === 'retirada';

    useEffect(() => {
        if (deliveryMethod === 'entrega') {
            const fee = parseFloat((Math.random() * 19 + 1).toFixed(2));
            setDeliveryFee(fee);
        } else {
            setDeliveryFee(0);
        }
    }, [deliveryMethod, selectedAddress]);

    const handlePayment = () => {
        if (deliveryMethod === 'entrega' && !selectedAddress.compatible) {
            setAdressIncompatibleIsOpen(true);
            return;
        }
        handleData({
            deliveryMethod,
            address: selectedAddress,
            deliveryFee,
            productsTotal: productsTotal + deliveryFee
        });
        onClose(2);
    }

    const resetAll = () => {
        setDeliveryMethod('entrega');
        setSelectedAddress(undefined);
        setConfirmDeliveryIsOpen(false);
    }


    if (!isOpen) return null;

    return (
        <Overlay style={{ backgroundColor: 'rgb(0 0 0 / 87%)' }}>
            <ModalBox style={{ height: 'fit-content', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton $return={true} onClick={() => {
                    resetAll();
                    onClose(null);

                }}>
                    <Icon icon="solar:alt-arrow-left-outline" color="#fff" width="30" />
                </CloseXButton>

                <Title style={{ margin: 0 }}>Formas de entrega</Title>

                <Content>

                    <AddressField>
                        <label>Método de entrega</label>
                        <MethodWrapper>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={deliveryMethod === 'entrega'}
                                    onChange={() => setDeliveryMethod('entrega')}
                                />
                                Entrega
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={deliveryMethod === 'retirada'}
                                    onChange={() => setDeliveryMethod('retirada')}
                                />
                                Vou buscar
                            </label>
                        </MethodWrapper>
                    </AddressField>

                    {deliveryMethod === 'entrega' && (
                        <AddressField>
                            <label>Endereço de entrega</label>
                            <Select
                                value={selectedAddress?.id || ''}
                                onChange={(e) => {
                                    const selectedAddressData = addresses.find(address => address.id == e.target.value);
                                    setSelectedAddress(selectedAddressData)
                                }}
                            >
                                <option value="">Selecione o endereço</option>
                                {addresses.map((addr) => (
                                    <option key={addr.id} value={addr.id}>
                                        ({addr.apelido}) {addr.endereco}, {addr.numero} - {addr.bairro} - {addr.cidade} - {addr.estado}
                                    </option>
                                ))}
                            </Select>

                            <NewAddressButton
                                disabled={isRetirada}
                                onClick={() => setNewAddressIsOpen(true)}
                            >
                                Cadastrar novo endereço
                            </NewAddressButton>
                        </AddressField>
                    )}

                    <PriceSummary>
                        {selectedAddress && deliveryMethod === 'entrega' && <>
                            <div>
                                <strong>Produtos</strong>
                                <span>R$ {productsTotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <strong>Entrega</strong>
                                <span>R$ {deliveryFee.toFixed(2)}</span>
                            </div>
                        </>}
                        {(selectedAddress || deliveryMethod === 'retirada') && <div style={deliveryMethod === 'retirada' ? { width: '100%', alignItems: 'flex-end' } : {}}>
                            <strong>Total</strong>
                            <span>R$ {deliveryMethod === 'entrega' ? (productsTotal + deliveryFee).toFixed(2) : productsTotal.toFixed(2)}</span>
                        </div>}
                    </PriceSummary>

                    {(selectedAddress || deliveryMethod === 'retirada') && (
                        <PaymentButton onClick={() => {
                            if (deliveryMethod === 'entrega') {
                                setConfirmDeliveryIsOpen(true)
                            } else {
                                handlePayment();
                            }
                        }}>
                            Escolher pagamento
                        </PaymentButton>
                    )}

                </Content>

                {confirmDeliveryIsOpen && (
                    <ConfirmDelivery>
                        <ConfirmDeliveryContent>
                            <Title style={{ margin: 0 }}>Confirmar entrega</Title>

                            <Content>
                                <p>Antes de continuar, confirme o endereço de entrega</p>
                                <br />
                                <strong>{selectedAddress && `${selectedAddress.endereco}, ${selectedAddress.numero} - ${selectedAddress.bairro} - ${selectedAddress.cidade} - ${selectedAddress.estado}`}</strong>
                                <ButtonGroup>
                                    <CancelButton style={{ backgroundColor: '#a9abae' }} onClick={() => setConfirmDeliveryIsOpen(false)}>Alterar</CancelButton>
                                    <ConfirmButton onClick={() => {
                                        handlePayment();
                                        setConfirmDeliveryIsOpen(false);
                                    }}>Confirmar</ConfirmButton>
                                </ButtonGroup>
                            </Content>

                        </ConfirmDeliveryContent>
                    </ConfirmDelivery>)}

            </ModalBox>

            <ModalComponent
                width={350}
                isOpen={adressIncompatibleIsOpen}
                onConfirm={() => setAdressIncompatibleIsOpen(false)}
                onConfirmText={"Ok, entendi"}
                title={'Desculpe-nos pelo transtorno'}
            >
                <Label>Estabelecimento não atende ao endereço indicado.
                    <br /><br />Certifique-se que você selecionou o endereço corretamente.</Label>
            </ModalComponent>

            <AddressFormComponent
                onClose={(data: any) => {
                    if (data) {
                        const newId = addresses.length + 1;
                        const newAddress = { ...data, id: newId, compatible: true };
                        setAddresses((prev) => [...prev, newAddress]);
                        setSelectedAddress(newAddress);
                    }
                    setNewAddressIsOpen(false);
                }}
                isOpen={newAddressIsOpen}
            />
        </Overlay>
    )
}