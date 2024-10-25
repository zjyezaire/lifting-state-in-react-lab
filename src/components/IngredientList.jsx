import React from 'react';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}
          className="ingredient-item"
        >
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
