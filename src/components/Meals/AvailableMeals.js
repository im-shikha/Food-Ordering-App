import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pizza',
    description: 'Italian Cheesy Veggies Pizza',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pasta',
    description: 'Mixed Sauces!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Double Whopper Cheese Burger',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Masala Dosa',
    description: 'Healthy...South Dish..',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;