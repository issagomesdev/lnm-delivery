

import { FilterInput, Wrapper } from "@/components/Into/Shops/styles";
import {
    MenuItem,
    MenuInfo,
    MenuName,
    MenuDescription,
    MenuPrice,
    MenuImage,
    MenuItems,
    CategoriesHeader,
} from "@/app/shops/[shopId]/cardapio/styles";
import {
    FlavorSelected,
    ChangeCategory,
} from "@/app/shops/[shopId]/monte-sua-pizza/styles";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { useScrollTop } from "@/hooks/useScrollTop";
import { ModalBox } from "@/components/Into/Shops/Checkout/styles";
import { Title, Overlay, CloseXButton } from '@/components/shared/Modal/styles';
import { shopCategories } from "@/components/Into/data";
import { Options, Option } from "./styles";
import { useTheme } from "styled-components";

const ChooseFlavor = ({
    category,
    shopId,
    setSelectedFlavors,
    selectedFlavors,
    selectedFlavor,
    productId,
    setProductId,
    categorySelector,
    setCategorySelector
}: {
    category: any,
    shopId: number,
    setSelectedFlavors: (value: (any | null)[]) => void,
    selectedFlavors: (any | null)[],
    selectedFlavor: number | null,
    productId: string | null,
    setProductId: (value: string) => void,
    setCategorySelector: (value: boolean) => void,
    categorySelector: boolean,
}) => {

    const [search, setSearch] = useState('');
    const isAtTop = useScrollTop();
    const theme = useTheme();

    const filteredItems = category?.menu?.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );
    const products = shopCategories(Number(shopId)).filter(
        (i) => i.name.includes("Pizza")
    );

    return <Wrapper style={{ marginBottom: 0, paddingTop: 0 }}>
        <CategoriesHeader fixed={!isAtTop} style={{ gap: '1rem' }}>

            <FilterInput>
                <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
                <input
                    type="text"
                    placeholder="Buscar por nome ou descrição..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                {search.length > 0 && <Icon icon={'material-symbols:close-rounded'} color={theme.colors.primary} width="20" onClick={() => setSearch('')} />
                }
            </FilterInput>

            {selectedFlavors.find(f => f !== null) &&
                <ChangeCategory onClick={() => setCategorySelector(true)}>
                    <span> : Selecionar sabor de outra categoria?</span>
                </ChangeCategory>
            }
        </CategoriesHeader>

        <MenuItems>
            {filteredItems?.map((item: any) => (
                <MenuItem key={item.idOption} withImage={!!item.photo} onClick={() => {

                    const updated = [...selectedFlavors];
                    const isSelected = selectedFlavors.findIndex(i => i && i.idOption === item.idOption);
                    if (isSelected > -1) {
                        updated[isSelected] = null;
                        setSelectedFlavors(updated);
                    } else if (selectedFlavors[selectedFlavor as number] === null || selectedFlavors[selectedFlavor as number].idOption !== item.idOption) {
                        updated[selectedFlavor as number] = { ...item, categoryId: category.id };
                        setSelectedFlavors(updated);
                    } else {
                        updated[selectedFlavor as number] = null;
                        setSelectedFlavors(updated);
                    }
                }}>
                    <MenuInfo>
                        <MenuName>{item.name}</MenuName>
                        <MenuDescription>{item.description}</MenuDescription>
                        <MenuPrice>R$ {item.price.toFixed(2)}</MenuPrice>
                        {selectedFlavors.find(i => i && i.idOption === item.idOption) &&
                            <FlavorSelected>
                                <span>({selectedFlavors.findIndex(i => i && i.idOption === item.idOption) + 1}º sabor selecionado)</span>
                                <Icon icon={'ic:baseline-close'} color={'red'} width="18" />
                            </FlavorSelected>}
                    </MenuInfo>
                    {item.photo && <MenuImage src={item.photo} alt={item.name} />}
                </MenuItem>
            ))}
        </MenuItems>

        {categorySelector && (<Overlay>
            <ModalBox>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={() => setCategorySelector(false)} />
                </CloseXButton>

                <Title style={{ margin: 0 }}>SELECIONE CATEGORIA</Title>

                <Options>
                    {products.map((product: any, index) => (
                        <Option selected={product.id == productId} key={index} onClick={() => {
                            setProductId(product.id);
                            setCategorySelector(false);
                        }}>{product.name}</Option>
                    ))}
                </Options>

            </ModalBox>
        </Overlay>)
        }

    </Wrapper>
}

export default ChooseFlavor;