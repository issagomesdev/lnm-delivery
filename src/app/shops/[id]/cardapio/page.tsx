"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/components/Into/Shops/data";
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
} from "./styles";
import { FilterInput, Wrapper } from "@/components/Into/Shops/styles";
import { Icon } from '@iconify/react';

const Cardapio = () => {
    const searchParams = useSearchParams();
    const selectedCategory = searchParams?.get("category");
    const [category, setCategory] = useState<any>();
    const [search, setSearch] = useState('');
    const router = useRouter();

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
    return (
        <>
            <Header>
                <h2 className="category">{category?.name || ""}</h2>
            </Header>

            {
                category ? <Wrapper>
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

                    <MenuItems>
                        {filteredItems?.map((item: any) => (
                            <MenuItem key={item.id} withImage={!!item.photo}>
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

        </>
    );
};

export default Cardapio;
