'use client';

import React, { useState } from 'react';
import { CategoriesWrapper, CategoryItem, CategoryName } from './styles';
import { categories } from '../data';
import { useHorizontalScrollDrag } from '@/hooks/useHorizontalScrollDrag';
import ImageWithSkeleton from "@/components/Into/Skeleton/ImageWithSkeleton";
import { SkeletonText } from "@/components/Into/Skeleton";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  filterIsActive: boolean
};

const Categories = ({ selectedCategory, setSelectedCategory, filterIsActive }: Props) => {
  const { ref, isDragging, events } = useHorizontalScrollDrag();
  const [loadedCategories, setLoadedCategories] = useState<{ [key: string]: boolean }>({});

  return (
    <CategoriesWrapper
      ref={ref}
      {...events}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {!filterIsActive && categories.map((category) => {
        const isLoaded = loadedCategories[category.id];

        return (
          <CategoryItem
            key={category.id}
            isSelected={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div style={{
              backgroundColor: selectedCategory === category.name? '#E6F4F1' : 'transparent',
              width: '100%'
            }}>

              <ImageWithSkeleton
              src={category.path}
              alt={category.name}
              ratio="4/3"
              rounded={false}
              priority
              onLoadComplete={() =>
                setLoadedCategories(prev => ({ ...prev, [category.id]: true }))
              }
              onDragStart={(e) => e.preventDefault()}
            />
            </div>

            {isLoaded ? (
              <CategoryName isSelected={selectedCategory === category.name}>
                {category.name}
              </CategoryName>
            ) : (
              <div style={{ width: "100%", marginTop: 6 }}>
                <SkeletonText lines={1} />
              </div>
            )}

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
                  setSelectedCategory('');
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

