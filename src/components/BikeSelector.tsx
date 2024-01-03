import { useState } from "react";
import BikeCard from "./BikeCard";

import type { Bike } from "../types/bikes";

type Props = {
  bikes: Bike[];
};

const BikeSelector: React.FC<Props> = ({ bikes }) => {
  const [selectedBikes, setSelectedBikes] = useState<number[]>([]);

  const handleBikeSelect = (bike: Bike) => {
    if (selectedBikes.includes(bike.id)) {
      setSelectedBikes(selectedBikes.filter((b) => b !== bike.id));
    } else if (selectedBikes.length < 5) {
      // TODO show validation message if user chosen more
      setSelectedBikes([...selectedBikes, bike.id]);
    }
  };

  const handleCompare = () => {
    const path = `/compare/${selectedBikes.join("/")}`;
    window.location.href = path;
  };

  const isBikeSelected = (bike: Bike) => selectedBikes.includes(bike.id);
  const isCompareDisabled = selectedBikes.length < 2;

  return (
    <div className="pb-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            selected={isBikeSelected(bike)}
            onToggleSelect={() => handleBikeSelect(bike)}
          />
        ))}
      </div>
      <button
        className={`fixed bottom-0 left-0 w-full p-2 text-white ${
          !isCompareDisabled ? "bg-blue-500" : "bg-gray-500"
        }`}
        disabled={isCompareDisabled}
        onClick={handleCompare}
        style={{ zIndex: 1000 }}
      >
        Compare Bikes
      </button>
    </div>
  );
};

export default BikeSelector;
