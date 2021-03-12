import React from "react";
import MealItem from './MealItem';

const MealGrid = ({ items, isLoading }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <MealItem key={item.recipe.foodID} item={item}/>
      ))}
    </section>
  );
};

export default MealGrid;
