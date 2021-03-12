import React from "react";

const MealItem = ({ item }) => {
  return (
    <section className="cards">
      <div className='card'>
        
        <a href={item.recipe.url}>
        <img src={item.recipe.image} alt="" />
        <p>{item.recipe.label}</p>
        </a>
      </div>
    </section>
  );
};

export default MealItem;
