// Components
import { AddRestaurant, RestaurantList } from "../components";
import { useAppContext } from "../context/appContext";

const HomePage = () => {
  const { name, restaurants, setRestaurants } = useAppContext();
  console.log("My name is: " + name);
  console.log("My restaurants are: " + restaurants);
  console.log("My set restaurants are: " + setRestaurants);

  return (
    <section className="flex justify-center text-center">
      <div className="flex flex-col justify-stretch w-full max-w-[1400px] p-5">
        <AddRestaurant />
        <RestaurantList />
      </div>
    </section>
  );
};
export default HomePage;
