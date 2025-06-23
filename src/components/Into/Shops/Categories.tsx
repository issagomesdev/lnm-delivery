'use client';

import React from 'react';
import { CategoriesWrapper, CategoryItem, CategoryImage, CategoryName } from './styles';
import { categories } from './data';

const Categories = () => {

    return (
        <CategoriesWrapper>
            {categories.map((category) => (
                <CategoryItem key={category.id}>
                    <CategoryImage src={category.path} alt={category.name} />
                    <CategoryName>{category.name}</CategoryName>
                </CategoryItem>
            ))}
        </CategoriesWrapper>
    );
};

export default Categories;