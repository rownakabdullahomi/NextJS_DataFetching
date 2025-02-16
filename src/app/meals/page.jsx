import MealSearchInput from "./components/MealSearchInput";

const MealsPage = async ({ searchParams }) => {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div className="flex justify-center py-3">
        <MealSearchInput />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {meals.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <p>{meal.strMeal}</p>
              <p>{meal.strCategory}</p>
              <p>{meal.strArea}</p>
              <p>{meal.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealsPage;
