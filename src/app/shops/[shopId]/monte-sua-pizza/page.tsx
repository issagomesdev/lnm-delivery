"use client";

import { useParams, useSearchParams } from "next/navigation";
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
    ForwardButton,
    FlavorsSelecteds,
} from "./styles";

import { useCustomBackAction } from "@/hooks/useCustomBackAction";
import { Icon } from '@iconify/react';
import { Checkout } from "@/components/Into/Shops/Checkout/Checkout";
import ChooseFlavor from "@/components/Into/Shops/Profile/pizzaBuild/ChooseFlavor";
import { ModalBox } from "@/components/Into/Shops/Checkout/styles";
import { Title, Overlay, CloseXButton } from '@/components/shared/Modal/styles';
import {
    MenuItems,
    MenuItem,
    MenuInfo,
    MenuName,
    MenuDescription,
    MenuPrice,
    MenuImage
} from "@/app/shops/[shopId]/cardapio/styles";
import {
    FlavorSelected,
} from "@/app/shops/[shopId]/monte-sua-pizza/styles";

export default function PizzaBuild() {
    const { shopId } = useParams();
    const searchParams = useSearchParams();
    const [category, setCategory] = useState<any>();
    const [productId, setProductId] = useState<string | null>('')
    const [steps, setSteps] = useState<number>(1);
    const [partSelected, setPartSelected] = useState<number | null>(null);
    const [flavorsQuantity, setFlavorsQuantity] = useState<number | null>(null);
    const [selectedFlavor, setSelectedFlavor] = useState<number | null>(null);
    const [selectedFlavors, setSelectedFlavors] = useState<(any | null)[]>([]);
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [showFlavorsSelecteds, setShowFlavorsSelecteds] = useState(false);
    const [categorySelector, setCategorySelector] = useState(false);

    useEffect(() => {
        const id = searchParams.get("productId");
        if (id) setProductId(id)
    }, [searchParams]);

    useEffect(() => {
        if (shopId && productId) {
            const selected = shopCategories(Number(shopId)).find(
                (i) => i.id === Number(productId)
            );
            if (selected) {
                setCategory(selected);
                setLoading(false)
            }
        }
    }, [shopId, productId]);

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
            if (steps === 4) {
                setSteps(3);
                return true;
            } else if (showFlavorsSelecteds) {
                setShowFlavorsSelecteds(false)
                return true;
            } else if (categorySelector) {
                setCategorySelector(false)
                return true;
            } else if (steps === 3) {
                setFlavorsQuantity(1)
                setSteps(2);
                return true;
            } else if (steps === 2) {
                setSteps(1);
                return true;
            } else if (steps === 1) {
                return `/shops/${shopId}`;
            }
            return false;
        }, [steps])
    );

    const getFlavorPositions = (count: number) => {
        const positions: { [key: number]: { top: string; left: string }[] } = {
            1: [{ top: "38%", left: "34%" }],
            2: [
                { top: "40%", left: "14%" },
                { top: "40%", left: "54%" },
            ],
            3: [
                { top: "30%", left: "16%" },
                { top: "30%", left: "55%" },
                { top: "62%", left: "35%" },
            ],
            4: [
                { top: "24%", left: "16%" },
                { top: "24%", left: "55%" },
                { top: "57%", left: "16%" },
                { top: "57%", left: "54%" },
            ],
        };
        return positions[count] || [];
    };

    const SelectOptions = (flavors: (any | null)[]) => {
        setItemSelected({
            flavors: flavors,
            categoryID: category.id
        })
        setCheckoutIsOpen(true);
    }

    useEffect(() => {
        console.log('selectedFlavors', selectedFlavors)
    }, [selectedFlavors])

    if (loading) return <h1>carregando...</h1>

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

                                            if (part === 1) {
                                                setSelectedFlavor(0);
                                                setSteps(4)
                                            }
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
                        {selectedFlavors.filter(f => f !== null).length > 0 && <FlavorsSelecteds onClick={() => setShowFlavorsSelecteds(true)}>
                            <h4>{selectedFlavors.filter(f => f !== null).length} Sabor(es) selecionado(s)</h4>
                        </FlavorsSelecteds>}
                    </Content>
                )}

                {steps === 3 && selectedFlavors.every(f => f !== null) && (<ForwardButton onClick={() => SelectOptions(selectedFlavors)}>
                    <span>Avançar </span>
                    <Icon icon={'mingcute:arrow-right-line'} color={'#fff'} width="18" />
                </ForwardButton>)}

                {steps === 4 && (
                    <ChooseFlavor
                        category={category}
                        shopId={Number(shopId)}
                        setSelectedFlavors={(value: (any | null)[]) => {
                            setSelectedFlavors(value)
                            if (flavorsQuantity == 1) {
                                SelectOptions(value)
                            }
                            setSteps(3)
                        }}
                        selectedFlavors={selectedFlavors}
                        selectedFlavor={selectedFlavor}
                        productId={productId}
                        setProductId={(value) => setProductId(value)}
                        categorySelector={categorySelector}
                        setCategorySelector={(value) => setCategorySelector(value)} />
                )}
            </Container>

            {showFlavorsSelecteds && (<Overlay>
                <ModalBox>
                    <CloseXButton>
                        <Icon icon="material-symbols:close" color="#fff" width="24" onClick={() => setShowFlavorsSelecteds(false)} />
                    </CloseXButton>

                    <Title style={{ margin: 0 }}>SABOR SELECIONADO</Title>

                    <MenuItems style={{ flexDirection: 'column' }}>
                        {selectedFlavors.map((item, index) => (
                            item && (
                                <MenuItem
                                    key={item.idOption}
                                    withImage={!!item.photo}
                                    style={{ width: '100%' }}
                                    onClick={() => {
                                        setSelectedFlavors((prev) =>
                                            prev.map((val, i) =>
                                                val?.idOption === item.idOption ? null : val
                                            )
                                        );
                                        setShowFlavorsSelecteds(false)
                                    }}
                                >
                                    <MenuInfo>
                                        <MenuName>{item.name}</MenuName>
                                        <MenuDescription>{item.description}</MenuDescription>
                                        <MenuPrice>R$ {item.price.toFixed(2)}</MenuPrice>

                                        <FlavorSelected>
                                            <span>({index + 1}º sabor selecionado)</span>
                                            <Icon icon="ic:baseline-close" color="red" width="18" />
                                        </FlavorSelected>
                                    </MenuInfo>

                                    {item.photo && <MenuImage src={item.photo} alt={item.name} />}
                                </MenuItem>
                            )
                        ))}

                    </MenuItems>

                </ModalBox>
            </Overlay >)
            }

            <Checkout
                isOpen={checkoutIsOpen}
                selected={itemSelected}
                onClose={() => setCheckoutIsOpen(false)}
                shopId={`${shopId}`} />
        </>
    );
};
