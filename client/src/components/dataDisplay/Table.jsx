import Button from "../actions/Button";
import ALink from "../navigation/ALink";
import { useFetch } from "../../customHooks/useFetch";

const Table = () => {
  const { isLoading, error, data } = useFetch("/restaurants");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error.isError) {
    return <h1>{error?.errorMsg}</h1>;
  }

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-blue-500 text-white">
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            const { id, name, location, price_range } = item;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{price_range}</td>
                <td>{price_range}</td>
                <td>
                  <ALink
                    linkTo={`/restaurants/${id}/update`}
                    text="Update"
                    classProp={
                      "bg-yellow-300 p-4 rounded-md hover:bg-yellow-200"
                    }
                  />
                </td>
                <td>
                  <Button
                    text="Delete"
                    classProp={"bg-red-500 hover:bg-red-400"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
