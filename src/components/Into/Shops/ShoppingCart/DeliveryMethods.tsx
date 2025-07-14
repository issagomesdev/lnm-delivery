
import { Title, Overlay, ModalBox, Content, CloseXButton } from '@/components/shared/Modal/styles';
import { Icon } from '@iconify/react';
import { addressesData } from '../../data';
import { useEffect, useState } from 'react';
import AddressFormComponent from '../../MyAddresses/AddressFormComponent';
import { MethodWrapper, Select, NewAddressButton, PriceSummary, PaymentButton, AddressField, CustomCheckbox } from './styles';

export const DeliveryMethods = ({ isOpen, onClose, productsTotal }: { isOpen: boolean; onClose: () => void, productsTotal: any }) => {

    const [addresses, setAddresses] = useState<any[]>(addressesData);
    const [deliveryMethod, setDeliveryMethod] = useState<'entrega' | 'retirada'>('entrega');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [newAddressIsOpen, setNewAddressIsOpen] = useState(false);
    const [deliveryFee, setDeliveryFee] = useState<number>(0);
    const isRetirada = deliveryMethod === 'retirada';

    useEffect(() => {
        if (deliveryMethod === 'entrega' && selectedAddress) {
            const fee = parseFloat((Math.random() * 19 + 1).toFixed(2));
            setDeliveryFee(fee);
        } else {
            setDeliveryFee(0);
        }
    }, [deliveryMethod, selectedAddress]);

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalBox style={{ height: '95%', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={onClose} />
                </CloseXButton>

                <Title style={{ margin: 0 }}>Formas de entrega</Title>

                <Content style={{ padding: '1rem' }}>

                    <AddressField>
                        <label>Método de entrega</label>
                        <MethodWrapper>
                            <label>
                                <CustomCheckbox
                                    type="checkbox"
                                    checked={deliveryMethod === 'entrega'}
                                    onChange={() => setDeliveryMethod('entrega')}
                                />
                                Entrega
                            </label>
                            <label>
                                <CustomCheckbox
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
                                value={selectedAddress}
                                onChange={(e) => setSelectedAddress(e.target.value)}
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
                            {(selectedAddress || deliveryMethod === 'retirada') && <div>
                                <strong>Total</strong>
                                <span>R$ {deliveryMethod === 'entrega' ? (productsTotal + deliveryFee).toFixed(2) : productsTotal}</span>
                            </div>}
                        </PriceSummary>

                    {(selectedAddress || deliveryMethod === 'retirada') && (
                        <PaymentButton>
                            Escolher pagamento
                        </PaymentButton>
                    )}

                </Content>

            </ModalBox>

            <AddressFormComponent
                onClose={(data: any) => {
                    if (data) {
                        const newId = addresses.length + 1;
                        const newAddress = { ...data, id: newId };
                        setAddresses((prev) => [...prev, newAddress]);
                        setSelectedAddress(String(newId)); // ⬅️ pré-seleciona automaticamente
                    }
                    setNewAddressIsOpen(false);
                }}
                isOpen={newAddressIsOpen}
            />
        </Overlay>
    )
}