"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import { shopCategories } from "@/components/Into/data";
import Header from "@/components/Into/Shops/Profile/Header";
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
} from "./styles";
import { FilterInput, Wrapper } from "@/components/Into/Shops/styles";
import { Icon } from '@iconify/react';
import { useScrollTop } from "@/hooks/useScrollTop";
import CartBar from "@/components/Into/Shops/ShoppingCart/CartBar";
import { Checkout } from "@/components/Into/Shops/Checkout/Checkout";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCustomBackAction } from "@/hooks/useCustomBackAction";

const Cardapio = () => {
    const searchParams = useSearchParams();
    const params = useParams();
    const shopId = params.id || '';
    const selectedCategory = searchParams?.get("category");
    const [category, setCategory] = useState<any>();
    const [search, setSearch] = useState('');
    const isAtTop = useScrollTop();
    const router = useRouter();
    const categories = shopCategories(Number(shopId));
    const isFirstRender = useRef(true);
    const categoryRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const { addItem, cart } = useShoppingCart();

    const handleSelectCategory = (cat: any) => {
        if (cat.name === "Pizza") {
            router.push(`/shops/${shopId}/monte-sua-pizza`);
        } else {
            router.push(`?category=${encodeURIComponent(cat.name)}`);
            setCategory(cat)
        }
    };

    const filteredItems = category?.menu?.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    const addProductToCart = (item: any) => {
        setCheckoutIsOpen(false);

        addItem({ ...item, id: cart.length + 1 });

        console.log('Produto adicionado ao carrinho:', cart);
    };

    useEffect(() => {

        if (selectedCategory === "Pizza") {
            router.push(`/shops/${shopId}/monte-sua-pizza`);
            return
        }

        const selected = categories.find((i) => i.name === (selectedCategory ?? categories[0].name));

        if (selected) {
            setCategory(selected);

            if (isFirstRender.current) {
                isFirstRender.current = false;
                setTimeout(() => {
                    const button = categoryRefs.current[selected.id];
                    if (button) {
                        button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }
                }, 100);
            }
        }
    }, [selectedCategory]);

    useCustomBackAction(
        useCallback(() => {
            if (checkoutIsOpen) {
                setCheckoutIsOpen(false);
            } else {
                router.replace(`/shops/${shopId}?CouponAlert=false`);
            }
            return true;
        }, [checkoutIsOpen, router, shopId])
    );

    return (
        <>
            <Header>
                <h2 className="category">{category?.name || ""}</h2>
            </Header>

            {
                category ? <Wrapper style={{ marginBottom: 0 }}>
                    <CategoriesHeader fixed={!isAtTop}>
                        <CategorySelector>
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    ref={(el: HTMLDivElement | null) => {
                                        if (el) categoryRefs.current[cat.id] = el;
                                    }}
                                >
                                    <CategoryButton
                                        selected={cat.id === category.id}
                                        onClick={() => handleSelectCategory(cat)}
                                    >
                                        {cat.name}
                                    </CategoryButton>
                                </div>
                            ))}
                        </CategorySelector>

                        <FilterInput>
                            <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
                            <input
                                type="text"
                                placeholder="Buscar por nome ou descrição..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                        </FilterInput>
                    </CategoriesHeader>

                    <MenuItems fixed={!isAtTop}>
                        {filteredItems?.map((item: any) => (
                            <MenuItem key={item.id} withImage={!!item.photo} onClick={() => {
                                setItemSelected({ id: item.id, categoryID: category.id });
                                setCheckoutIsOpen(true);
                            }}>
                                <MenuInfo>
                                    <MenuName>{item.name}</MenuName>
                                    <MenuDescription>{item.description}</MenuDescription>
                                    <MenuPrice>R$ {item.price.toFixed(2)}</MenuPrice>
                                </MenuInfo>
                                {item.photo && <MenuImage src={item.photo} alt={item.name} />}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Wrapper> : <h1>carregando...</h1>
            }

            <Checkout
                isOpen={checkoutIsOpen}
                selected={itemSelected}
                onClose={(product) => {
                    if (product) {
                        addProductToCart(product);
                    }
                    setCheckoutIsOpen(false);
                }}
                shopId={`${shopId}`} />

            <CartBar />

        </>
    );
};

export default Cardapio;
