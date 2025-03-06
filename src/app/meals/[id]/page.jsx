import MealSearchInput from "../components/MealSearchInput";



const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    //   setMeals(data?.meals || []);
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params
 
  // fetch data
  const singleMeal = await fetchSingleMeal(id)
 
 
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  }
}

const SingleMealPage = async ({ params }) => {
  const p = await params;

 

  const singleMeal = await fetchSingleMeal(p?.id);

  return (
    <div>
      <p>{JSON.stringify(singleMeal)}</p>
    </div>
  );
};

export default SingleMealPage;
