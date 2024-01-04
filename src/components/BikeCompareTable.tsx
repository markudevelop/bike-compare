import { useMemo } from "react";
import type { Bike } from "../types/bikes";

type Props = {
  bikes: Bike[];
};

const BikeCompareTable: React.FC<Props> = ({ bikes }) => {
  const fields = useMemo(
    () => [
      { label: "Name", value: (bike: Bike) => `${bike.model}` },
      { label: "Brand", value: (bike: Bike) => `${bike.brand}` },
      { label: "Price", value: (bike: Bike) => `$${bike.price}` },
      { label: "Weight", value: (bike: Bike) => bike.weight },
      { label: "User Rating", value: (bike: Bike) => `${bike.userRating} / 5` },
      { label: "Frame Material", value: (bike: Bike) => bike.frameMaterial },
      { label: "Wheel Size", value: (bike: Bike) => bike.wheelSize },
      { label: "Brake Type", value: (bike: Bike) => bike.brakeType },
      { label: "Gear System", value: (bike: Bike) => bike.gearSystem },
      {
        label: "Color Options",
        value: (bike: Bike) => bike.colorOptions?.join(", "),
      },
      {
        label: "Suitable Terrain",
        value: (bike: Bike) => bike.suitableTerrain,
      },
      { label: "Warranty", value: (bike: Bike) => bike.warranty },
    ],
    [bikes]
  );

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          {fields.map((field) => (
            <tr key={field.label}>
              <th
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                scope="col"
              >
                {field.label}
              </th>
              {bikes.map((bike) => (
                <td
                  key={bike.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {field.value(bike)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BikeCompareTable;
