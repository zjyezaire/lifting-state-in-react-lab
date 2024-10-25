import React from 'react';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul className="burger-stack">
      {stack.map((ingredient, index) => (
        <li
          key={index}
          style={{ backgroundColor: ingredient.color }}
          className="stack-item"
        >
          {ingredient.name}
          <button onClick={() => removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
