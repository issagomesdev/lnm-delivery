'use client';

import { Icon } from '@iconify/react';
import { CategoryItem, CategoriesContainer } from './styles';
import { useTheme } from 'styled-components';

export type Category = {
  id: number;
  name: string;
};

type Props = {
  categories: Category[];
  onSelectCategory?: (category: Category) => void;
};

export const ShopCategoriesList = ({ categories, onSelectCategory }: Props) => {
  const theme = useTheme();

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          onClick={() => onSelectCategory?.(category)}
        >
          <span>{category.name}</span>
          <Icon icon="ep:arrow-right-bold" width="16" color={theme.colors.primary} />
        </CategoryItem>
      ))}
    </CategoriesContainer>
  );
};
