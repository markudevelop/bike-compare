import type { Bike } from "../types/bikes";

type Props = {
  bikes: Bike[];
};

const BikeCompareTable: React.FC<Props> = ({ bikes }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <th
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              scope="col"
            >
              Name
            </th>
            {bikes.map((bike) => (
              <td
                key={bike.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {bike.brand} {bike.model}
              </td>
            ))}
          </tr>
          <tr>
            <th
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              scope="col"
            >
              Price
            </th>
            {bikes.map((bike) => (
              <td
                key={bike.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                ${bike.price}
              </td>
            ))}
          </tr>
          <tr>
            <th
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              scope="col"
            >
              Weight
            </th>
            {bikes.map((bike) => (
              <td
                key={bike.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {bike.weight}
              </td>
            ))}
          </tr>
          <tr>
            <th
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              scope="col"
            >
              User Rating
            </th>
            {bikes.map((bike) => (
              <td
                key={bike.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {bike.userRating} / 5
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BikeCompareTable;
