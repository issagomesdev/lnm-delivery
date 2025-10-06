
import { Title, Overlay, ModalBox, Content, CloseXButton } from '@/components/shared/Modal/styles';
import { Icon } from '@iconify/react';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { ItemTitle, OpItem, GroupName, Textarea, SmallText, SaveButton, ItemLabel, ItemData } from './styles';

export const ItemDetails = ({ isOpen, onClose, id }: { isOpen: boolean; onClose: (product?: any) => void; id: number | null }) => {

    const { cart, updateItemObservation } = useShoppingCart();
    const item = cart.find((i) => i.id === id);
    const [observation, setObservation] = useState('');

    useEffect(() => {
        if (item) setObservation(item.observations || '');
    }, [item]);

    const handleObservations = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value;

        value = value.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
            ""
        );

        value = value.replace(/[^a-zA-Z0-9À-ÿ\s.,!?;:'"()-]/g, "");

        if (value.length > 200) {
            value = value.slice(0, 200);
        }

        setObservation(value)
    };

    if (!isOpen || !item) return null;

    return (
        <Overlay>
            <ModalBox style={{ height: '95%', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={onClose} />
                </CloseXButton>

                <Title style={{ margin: 0 }}>Detalhes do item</Title>

                <Content>

                    <ItemData>
                        <ItemLabel> Item </ItemLabel>
                        <ItemTitle>{item.name}</ItemTitle>
                    </ItemData>

                    <ItemData>
                        <ItemLabel> Opções escolhidas </ItemLabel>
                        {Object.entries(item.options || {}).map(([groupId, group]: any) => (
                            Object.values(group).map((opt: any, i: number) => (
                                <OpItem key={i}>
                                    <span>{opt.quantity} x {opt.name}</span>
                                    <strong>R$ {opt.value.toFixed(2)}</strong>
                                </OpItem>
                            ))
                        ))}
                    </ItemData>

                    <ItemData>
                        <ItemLabel> Observação </ItemLabel>
                        <Textarea
                            value={observation}
                            onChange={handleObservations}
                            placeholder="Digite observações aqui..."
                        />
                        <small style={{ width: '100%', display: 'block', textAlign: 'right', marginBottom: '5px' }}>
                            {observation.length}/200 caracteres
                        </small>
                        <SmallText>
                            Evite utilizar este campo para incluir ou trocar ingredientes. Isso poderá alterar o valor do seu pedido em relação ao informado no aplicativo.
                        </SmallText>
                    </ItemData>

                    <SaveButton onClick={() => {
                        updateItemObservation(item.id, observation);
                        onClose();
                    }}>
                        Alterar observação
                    </SaveButton>
                </Content>

            </ModalBox>
        </Overlay>
    )
}