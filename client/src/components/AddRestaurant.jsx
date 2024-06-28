import Input from "./dataInput/Input";
import Select from "./dataInput/Select";
import SubmitButton from "./actions/SubmitButton";

// Temp data
import { priceRangeData } from "../utils/tempData";

const AddRestaurant = () => {
  return (
    <>
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
    </>
  );
};
export default AddRestaurant;
