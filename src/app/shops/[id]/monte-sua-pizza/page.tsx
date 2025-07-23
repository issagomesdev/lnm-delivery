"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { shopCategories } from "@/components/Into/data";
import Header from "@/components/Into/Shops/Profile/Header";
import {
    Content,
    Options,
    Option,
    PizzaBackground,
    Container,
    FlavorsFigure,
    FlavorsOptions,
    FlavorsOption,
    FlavorSelected,
    ForwardButton,
} from "./styles";
import {
    CategorySelector,
    CategoryButton,
    MenuItem,
    MenuInfo,
    MenuName,
    MenuDescription,
    MenuPrice,
    MenuImage,
    MenuItems,
    CategoriesHeader,
} from "@/app/shops/[id]/cardapio/styles";
import { FilterInput, Wrapper } from "@/components/Into/Shops/styles";
import { useCustomBackAction } from "@/hooks/useCustomBackAction";
import { useScrollTop } from "@/hooks/useScrollTop";
import { Icon } from '@iconify/react';
import { useRouter } from "next/navigation";
import { Checkout } from "@/components/Into/Shops/Checkout/Checkout";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useIsMobile } from "@/hooks/useIsMobile";

const PizzaBuild = () => {
    const params = useParams();
    const shopId = params.id || "";
    const [category, setCategory] = useState<any>();
    const [steps, setSteps] = useState<number>(1);
    const [partSelected, setPartSelected] = useState<number | null>(null);
    const [flavorsQuantity, setFlavorsQuantity] = useState<number | null>(null);
    const [selectedFlavor, setSelectedFlavor] = useState<number | null>(null);
    const [selectedFlavors, setSelectedFlavors] = useState<(number | null)[]>([]);
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState<any>({});
    const [search, setSearch] = useState('');
    const isAtTop = useScrollTop();
    const isMobile = useIsMobile();
    const router = useRouter();

    const filteredItems = category?.menu?.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const selected = shopCategories(Number(shopId)).find(
            (i) => i.name === "Pizza"
        );
        if (selected) {
            setCategory(selected);
        }
    }, [shopId]);

    useEffect(() => {
        if (flavorsQuantity && selectedFlavors.length !== flavorsQuantity) {
            setSelectedFlavors(Array(flavorsQuantity).fill(null));
        }
    }, [flavorsQuantity]);

    const getPizzaImagePath = () => {
        if (!flavorsQuantity) return "";
        if (selectedFlavors.filter(f => f !== null).length === flavorsQuantity) {
            return `/images/flavors/forma-pizza-full-min.png`;
        }
        if (selectedFlavors.filter(f => f === null).length === flavorsQuantity) {
            return `/images/flavors/forma-pizza-${flavorsQuantity}-0-min.png`;
        }
        const flavorString = selectedFlavors
            .map((flavor, index) => (flavor !== null ? index + 1 : null))
            .filter((f) => f !== null)
            .join('-');
        return `/images/flavors/forma-pizza-${flavorsQuantity}-${flavorString}-min.png`;
    };

    useCustomBackAction(
        useCallback(() => {
            if (steps > 1) {

                setSteps((prev) => prev - 1);
                return true;
            }
            return false;
        }, [steps])
    );

    const getFlavorPositions = (count: number) => {
        const positions: { [key: number]: { top: string; left: string }[] } = {
            1: [{ top: "41%", left: "36%" }],
            2: [
                { top: "42%", left: "17%" },
                { top: "42%", left: "57%" },
            ],
            3: [
                { top: "30%", left: "19%" },
                { top: "30%", left: "55%" },
                { top: "65%", left: "37%" },
            ],
            4: [
                { top: "27%", left: "20%" },
                { top: "27%", left: "54%" },
                { top: "60%", left: "20%" },
                { top: "60%", left: "54%" },
            ],
        };
        return positions[count] || [];
    };

    const SelectOptions = () => {
        if (isMobile) {
            router.push(`/shops/${shopId}/checkout?id=${selectedFlavors.join(",")}&categoryID=${category.id}`)
            return
        }
        
        setItemSelected({
            id: selectedFlavors,
            categoryID: category.id
        })
        setCheckoutIsOpen(true);
    }

    return (
        <>
            <Header>
                <h2 className="category">{steps === 4 ? "Escolha os sabores" : "MONTE SUA PIZZA"} </h2>
            </Header>

            {steps !== 4 && <PizzaBackground>
                <img src="/images/PizzaBackground.png" alt="" />
            </PizzaBackground>}

            <Container>
                {steps === 1 && (
                    <Content>
                        <h2>Selecione o tamanho</h2>
                        <Options>
                            {category?.sizes?.map((size: any, index: number) => (
                                <Option
                                    key={index}
                                    onClick={() => {
                                        setPartSelected(size.parts);
                                        setSteps(2);
                                    }}
                                >
                                    <h3>{size?.name}</h3>
                                    <span>
                                        até {size.parts} sabor{size.parts > 1 && "es"}
                                    </span>
                                </Option>
                            ))}
                        </Options>
                    </Content>
                )}

                {steps === 2 && (
                    <Content>
                        <h2>Quantos sabores?</h2>
                        <p>
                            Esse restaurante define o valor da pizza meio a meio pelo maior
                            preço entre os sabores escolhidos.
                        </p>
                        <Options>
                            {Array.from({ length: Number(partSelected) }, (_, i) => i + 1).map(
                                (part, index) => (
                                    <Option
                                        key={index}
                                        onClick={() => {
                                            setFlavorsQuantity(part);
                                            setSteps(3);
                                        }}
                                    >
                                        <h3>
                                            {part} sabor{part > 1 && "es"}
                                        </h3>
                                    </Option>
                                )
                            )}
                        </Options>
                    </Content>
                )}

                {steps === 3 && (
                    <Content>
                        <h2>Selecione os sabores</h2>

                        <FlavorsFigure>
                            <img
                                src={getPizzaImagePath()}
                                alt={`forma-pizza-${flavorsQuantity}`}
                            />

                            <FlavorsOptions>
                                {getFlavorPositions(Number(flavorsQuantity)).map(
                                    (pos: any, index: number) => (
                                        <FlavorsOption
                                            selected={selectedFlavors[index] !== null}
                                            key={index}
                                            style={{ position: "absolute", ...pos }}
                                            onClick={() => {
                                                setSelectedFlavor(index);
                                                setSteps(4)
                                            }}
                                        >
                                            <h4>{index + 1}° sabor</h4>
                                            <span>Clique aqui</span>
                                        </FlavorsOption>
                                    )
                                )}
                            </FlavorsOptions>
                        </FlavorsFigure>
                    </Content>
                )}

                {steps === 3 && selectedFlavors.every(f => f !== null) && (<ForwardButton onClick={() => SelectOptions()}>
                    <span>Avançar </span>
                    <Icon icon={'mingcute:arrow-right-line'} color={'#fff'} width="18" />
                </ForwardButton>)}

                {steps === 4 && (
                    <Wrapper style={{ marginBottom: 0, paddingTop: 0 }}>
                        <CategoriesHeader fixed={!isAtTop}>

                            <FilterInput>
                                <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
                                <input
                                    type="text"
                                    placeholder="Buscar por nome ou descrição..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)} />
                            </FilterInput>
                        </CategoriesHeader>

                        <MenuItems>
                            {filteredItems?.map((item: any) => (
                                <MenuItem key={item.id} withImage={!!item.photo} onClick={() => {

                                    const updated = [...selectedFlavors];
                                    if (selectedFlavors[selectedFlavor as number] === null || selectedFlavors[selectedFlavor as number] !== item.id) {
                                        updated[selectedFlavor as number] = item.id;
                                        setSelectedFlavors(updated);
                                    } else {
                                        updated[selectedFlavor as number] = null;
                                        setSelectedFlavors(updated);
                                    }
                                    setSteps(3)
                                }}>
                                    <MenuInfo>
                                        <MenuName>{item.name}</MenuName>
                                        <MenuDescription>{item.description}</MenuDescription>
                                        <MenuPrice>R$ {item.price.toFixed(2)}</MenuPrice>
                                        {selectedFlavors[selectedFlavor as number] === item.id &&
                                            <FlavorSelected>
                                                <span>({(selectedFlavor as number) + 1}º sabor selecionado)</span>
                                                <Icon icon={'ic:baseline-close'} color={'red'} width="18" />
                                            </FlavorSelected>}
                                    </MenuInfo>
                                    {item.photo && <MenuImage src={item.photo} alt={item.name} />}
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Wrapper>
                )}


            </Container>

            <Checkout
                isOpen={checkoutIsOpen}
                selected={itemSelected}
                onClose={() => setCheckoutIsOpen(false)}
                shopId={`${shopId}`} />
        </>
    );
};

export default PizzaBuild;
