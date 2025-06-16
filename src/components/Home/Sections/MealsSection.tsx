import { Section, MealsGrid, MealItem, MealPhoto } from './styles';
import React from 'react';

export default function MealsSection() {
  return (
    <Section className="meals">
    {[1, 2, 3, 4, 5, 6, 7, 8].reduce<number[][]>((rows, num, idx) => {
      const rowIdx = Math.floor(idx / 4);
      if (!rows[rowIdx]) rows[rowIdx] = [];
      rows[rowIdx].push(num);
      return rows;
    }, []).map((row, i) => (
      <MealsGrid key={i}>
        {row.map(num => (
          <MealItem key={num}>
            <MealPhoto>
              <img src={`/images/meal-photos/${num}.jpg`} alt={`Meal ${num}`} />
            </MealPhoto>
          </MealItem>
        ))}
      </MealsGrid>
    ))}
  </Section>
  )
}
