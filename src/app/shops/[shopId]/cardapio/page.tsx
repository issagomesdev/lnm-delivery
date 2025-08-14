"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import { shopCategories } from "@/components/Into/data";
import Header from "@/components/Into/Shops/Profile/Header";
import {
    Wrapper,
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
import { FilterInput } from "@/components/Into/Shops/styles";
import { Icon } from '@iconify/react';
import { useScrollTop } from "@/hooks/useScrollTop";
import CartBar from "@/components/Into/Shops/ShoppingCart/CartBar";
import { Checkout } from "@/components/Into/Shops/Checkout/Checkout";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useCustomBackAction } from "@/hooks/useCustomBackAction";
import { useTheme } from "styled-components";
import { Loading } from "@/components/Loading";
import { ImageWithLoader } from '@/components/ImageWithLoader';

const Cardapio = () => {
    const searchParams = useSearchParams();
    const { shopId } = useParams();
    const [search, setSearch] = useState('');
    const isAtTop = useScrollTop();
    const router = useRouter();
    const categories = shopCategories(Number(shopId));
    const [category, setCategory] = useState<any>(categories[0]);
    const isFirstRender = useRef(true);
    const categoryRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [loading, setLoading] = useState(true);
    const { addItem, cart } = useShoppingCart();
    const theme = useTheme();

    const handleSelectCategory = (cat: any) => {
        setLoading(true)
        if (cat.name.includes("Pizza")) {
            router.push(`/shops/${shopId}/monte-sua-pizza?productId=${encodeURIComponent(cat.id)}`);
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
        const param = searchParams.get("category");
        const selected = categories.find((i) => i.name === param);

        if (selected) setCategory(selected);

        if (category.name.includes("Pizza")) {
            router.push(`/shops/${shopId}/monte-sua-pizza?productId=${encodeURIComponent(category.id)}`);
            return
        }

        setLoading(false)
    }, [searchParams]);

    useEffect(() => {
        setTimeout(() => {
            const button = categoryRefs.current[category?.id];
            if (button) {
                button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }, 100);
    }, [category])

    useCustomBackAction(
        useCallback(() => {
            setLoading(true);
            if (checkoutIsOpen) {
                setCheckoutIsOpen(false);
                setLoading(false);
                return true;
            }

            setLoading(false);
            return `/shops/${shopId}?CouponAlert=false`;
        }, [checkoutIsOpen, shopId])
    );

    return (
        <>
            {loading && <Loading />}
            <Header>
                <h2 className="category">{category?.name || ""}</h2>
            </Header>

            <Wrapper>
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
                        {search.length > 0 && <Icon icon={'material-symbols:close-rounded'} color={theme.colors.primary} width="20" onClick={() => setSearch('')} />
                        }
                    </FilterInput>
                </CategoriesHeader>

                <MenuItems fixed={!isAtTop}>
                    {filteredItems?.map((item: any) => (
                        <MenuItem key={item.id} withImage={!!item.photo} onClick={() => {
                            setItemSelected({ id: item.id, categoryID: category.id });
                            setCheckoutIsOpen(true);
                            window.history.pushState(null, '', window.location.pathname);
                        }}>
                            <MenuInfo>
                                <MenuName>{item.name}</MenuName>
                                <MenuDescription>{item.description}</MenuDescription>
                                <MenuPrice>R$ {item.price.toFixed(2)}</MenuPrice>
                            </MenuInfo>
                            {item.photo &&
                                <ImageWithLoader src={item.photo} alt={item.name}
                                    wrapperStyle={{
                                        width: '80px',
                                        height: '80px',
                                        zIndex: '-1'
                                    }}
                                    imgStyle={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '6px',
                                        userSelect: 'none',
                                    }}
                                    loaderStyle={{ width: '35px', height: '35px' }} />
                            }
                        </MenuItem>
                    ))}
                </MenuItems>
            </Wrapper>

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

            <CartBar setLoading={(value:boolean) => setLoading(value)}/>

        </>
    );
};

export default Cardapio;
