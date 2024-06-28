import { restaurantData } from "../../utils/tempData";
import Button from "../actions/Button";
import ALink from "../navigation/ALink";

const Table = () => {
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
          {restaurantData.map((item) => {
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
          {/* row 1 */}
          {/* <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr> */}
          {/* row 2 */}
          {/* <tr>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr> */}
          {/* row 3 */}
          {/* <tr>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
