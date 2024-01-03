import type { Bike } from "../types/bikes";

type Props = {
  bike: Bike;
  selected: boolean;
  onToggleSelect: () => void;
};

const BikeCard: React.FC<Props> = ({
  bike,
  selected = false,
  onToggleSelect = () => {},
}) => {
  const ringColorClass = selected ? "ring-blue-500" : "ring-transparent";

  return (
    <article
      className={`flex flex-col w-full mx-auto rounded overflow-hidden shadow-lg bg-white m-2 ring-2 ${ringColorClass}`}
    >
      <figure>
        <img
          src={bike.imageUrl}
          alt={`Bike model ${bike.brand} ${bike.model}`}
          className="w-full h-48 md:h-96 object-contain"
          loading="lazy"
        />
        <figcaption className="sr-only">
          {bike.brand} - {bike.model}
        </figcaption>
      </figure>

      <section className="flex flex-col flex-1 p-4 justify-center">
        <h3 className="font-bold text-xl mb-2">
          {bike.brand} - {bike.model}
        </h3>
        <dl>
          <div className="flex justify-between">
            <dt>
              <strong>Price:</strong>
            </dt>
            <dd>${bike.price.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>
              <strong>Weight:</strong>
            </dt>
            <dd>{bike.weight}</dd>
          </div>
          <div className="flex justify-between">
            <dt>
              <strong>User Rating:</strong>
            </dt>
            <dd>{bike.userRating} / 5</dd>
          </div>
        </dl>
        <button
          onClick={onToggleSelect}
          className={`mt-2 w-full text-sm font-semibold py-2 rounded border border-gray-400 ${
            selected
              ? "bg-blue-500 text-white border-blue-400"
              : "bg-white text-gray-800"
          }`}
        >
          {selected ? "Remove from Compare" : "Add for Compare"}
        </button>
      </section>
    </article>
  );
};

export default BikeCard;
