import Input from "./dataInput/Input";
import Select from "./dataInput/Select";
import SubmitButton from "./actions/SubmitButton";
import { createNewRestaurantURL } from "../API/restaurantsAPI";
import { axiosInstance } from "../API/axiosInstance";
import { useState } from "react";
import { useMutation } from "../customHooks/useMutation";

// Temp data
import { priceRangeData } from "../utils/tempData";

const AddRestaurant = () => {
  const { mutation } = useMutation(createNewRestaurantURL());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());

    const { name, location, price_range } = entries;

    await mutation({ name, location, price_range });
  };

  return (
    <>
      <h1 className="text-3xl p-2 my-0.5">Restaurant Finder</h1>
      <form
        className="flex justify-center gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input name="name" type="text" placeholder="name" />
        <Input name="location" type="text" placeholder="location" />
        <Select
          name="price_range"
          text="Price Range"
          optionsArray={priceRangeData}
        />
        <SubmitButton
          text="Add"
          classProp={"bg-blue-700 p-2 rounded-md text-white"}
        />
      </form>
    </>
  );
};
export default AddRestaurant;
