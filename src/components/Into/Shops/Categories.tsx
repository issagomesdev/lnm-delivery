'use client';

import React, { useState } from 'react';
import { CategoriesWrapper, CategoryItem, CategoryImage, CategoryName } from './styles';
import { categories } from './data';
import { useHorizontalScrollDrag } from '@/hooks/useHorizontalScrollDrag';

type Props = {
  selectedCategories: number[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const Categories = ({ selectedCategories, setSelectedCategories }: Props) => {
  const { ref, isDragging, events } = useHorizontalScrollDrag();

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((cat) => cat !== id)
        : [...prev, id]
    );
  };

  return (
    <CategoriesWrapper
      ref={ref}
      {...events}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.id);

        return (
          <CategoryItem
            key={category.id}
            isSelected={isSelected}
            onClick={() => toggleCategory(category.id)}
          >
            <CategoryImage
              src={category.path}
              alt={category.name}
              isSelected={isSelected}
              onDragStart={(e) => e.preventDefault()}
            />
            <CategoryName isSelected={isSelected}>{category.name}</CategoryName>

            {isSelected && (
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
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategory(category.id);
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
