// Components
import { Table } from "../components";
import { AddRestaurant } from "../components";

const HomePage = () => {
  return (
    <section className="flex justify-center text-center">
      <div className="flex flex-col justify-stretch w-full max-w-[1400px] p-5">
        <AddRestaurant />
        <Table />
      </div>
    </section>
  );
};
export default HomePage;
