import React, { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import './App.css';

// Initial list of ingredients
const availableIngredients = [
  { name: 'Kaiser Bun', color: '#d2691e' },
  { name: 'Sesame Bun', color: '#ffcc66' },
  { name: 'Gluten Free Bun', color: '#e0ac69' },
  { name: 'Lettuce Wrap', color: '#8bc34a' },
  { name: 'Beef Patty', color: '#6b2e1a' },
  { name: 'Soy Patty', color: '#8b4513' },
  { name: 'Black Bean Patty', color: '#3b1b0f' },
  { name: 'Chicken Patty', color: '#f4a460' },
  { name: 'Lettuce', color: '#228b22' },
  { name: 'Tomato', color: '#ff6347' },
  { name: 'Bacon', color: '#b22222' },
  { name: 'Onion', color: '#e6e6fa' },
  { name: 'Cheddar Cheese', color: '#ffa500' },
  { name: 'Swiss Cheese', color: '#f5deb3' },
];

const App = () => {
  // State to manage the burger stack
  const [stack, setStack] = useState([]);

  // Add ingredient to the burger stack
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  // Remove ingredient from the burger stack
  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
