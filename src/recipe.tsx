import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}: any) => {
  return(
    <div className={styles.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient: any) => (
          <li key={ingredient.food}>{ingredient.text}</li>
        ))}
      </ol>
      <img className={styles.image} src={image} alt={title}/>
      <p>Calories: {calories}</p>
    </div>
  );
}

export default Recipe;