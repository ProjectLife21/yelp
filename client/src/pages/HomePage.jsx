// Components
import { Input, Select, SubmitButton, Table } from "../components";

// Temp data
import { priceRangeData } from "../utils/tempData";

const HomePage = () => {
  return (
    <section className="flex justify-center text-center">
      <div className="flex flex-col justify-stretch w-full max-w-[1400px] p-5">
        <h1 className="text-3xl p-2 my-0.5">Restaurant Finder</h1>
        <form className="flex justify-center gap-2">
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="location" />
          <Select text="Price Range" optionsArray={priceRangeData} />
          <SubmitButton
            text="Add"
            classProp={"bg-blue-700 p-2 rounded-md text-white"}
          />
        </form>
        <Table />
      </div>
    </section>
  );
};
export default HomePage;
