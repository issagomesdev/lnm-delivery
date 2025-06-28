'use client';

import React, { useEffect, useState } from 'react';
import { CategoriesWrapper, CategoryItem, CategoryImage, CategoryName } from './styles';
import { categories } from './data';
import { useHorizontalScrollDrag } from '@/hooks/useHorizontalScrollDrag';

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Categories = ({ selectedCategory, setSelectedCategory }: Props) => {
  const { ref, isDragging, events } = useHorizontalScrollDrag();

  return (
    <CategoriesWrapper
      ref={ref}
      {...events}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {categories.map((category) => {

        return (
          <CategoryItem
            key={category.id}
            isSelected={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            <CategoryImage
              src={category.path}
              alt={category.name}
              isSelected={selectedCategory === category.name}
              onDragStart={(e) => e.preventDefault()}
            />
            <CategoryName isSelected={selectedCategory === category.name}>{category.name}</CategoryName>

            {selectedCategory === category.name && (
              <span
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  backgroundColor: '#ff3b3b',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 18,
                  height: 18,
                  fontSize: 12,
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategory('')
                }}
              >
                ✕
              </span>
            )}
          </CategoryItem>
        );
      })}
    </CategoriesWrapper>
  );
};

export default Categories;
