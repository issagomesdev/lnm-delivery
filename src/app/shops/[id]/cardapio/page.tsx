"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { shopCategories } from "@/components/Into/Shops/data";
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
import { Checkout } from "@/components/Into/Shops/ShoppingCart/Checkout";
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import CartBar from "@/components/Into/Shops/ShoppingCart/CartBar";

const Cardapio = () => {
    const searchParams = useSearchParams();
    const params = useParams();
    const shopId = params.id || 1;
    const selectedCategory = searchParams?.get("category");
    const [category, setCategory] = useState<any>();
    const [checkoutIsOpen, setCheckoutIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const isAtTop = useScrollTop();
    const router = useRouter();
    const categories = shopCategories(Number(shopId));
    const { addItem, cart } = useShoppingCart();

    const [itemSelected, setItemSelected] = useState<any>({
        categoryID: null, id: null
    });

    const handleSelectCategory = (cat: any) => {
        router.push(`?categoria=${encodeURIComponent(cat.name)}`);
        setCategory(cat)
    };

    const filteredItems = category?.menu?.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        if (selectedCategory) {
            const selected = categories.find((i) => i.name === selectedCategory);
            if (selected) setCategory(selected);
        }
    }, [selectedCategory]);

    const openCheckout = (categoryID: number, id: number) => {
        setCheckoutIsOpen(true)
        setItemSelected({
            categoryID: categoryID, id: id
        });
    }

    const addProductToCart = (item: any) => {
        setCheckoutIsOpen(false);
        
        addItem( { ...item, id: cart.length + 1 });

        console.log('Produto adicionado ao carrinho:', cart);
    };


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
                                <CategoryButton
                                    key={cat.id}
                                    selected={cat.id === category.id}
                                    onClick={() => handleSelectCategory(cat)}
                                >
                                    {cat.name}
                                </CategoryButton>
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
                            <MenuItem key={item.id} withImage={!!item.photo} onClick={() => openCheckout(category.id, item.id)}>
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

            <CartBar />

            <Checkout
                isOpen={checkoutIsOpen}
                selected={itemSelected}
                onClose={(product) => {
                    if (product) {
                        addProductToCart(product);
                    }
                    setCheckoutIsOpen(false);
                }} />

        </>
    );
};

export default Cardapio;
