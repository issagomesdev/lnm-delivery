"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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
    
    const handleSelectCategory = (cat: any) => {
        router.push(`?category=${encodeURIComponent(cat.name)}`);
        setCategory(cat)
    };

    const filteredItems = category?.menu?.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        if (selectedCategory) {
            const selected = categories.find((i) => i.name === selectedCategory);
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
        }
    }, [selectedCategory]);


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
                            <MenuItem key={item.id} withImage={!!item.photo} onClick={() => router.push(`/shops/${shopId}/checkout?id=${item.id}&categoryID=${category.id}`)}>
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

        </>
    );
};

export default Cardapio;
