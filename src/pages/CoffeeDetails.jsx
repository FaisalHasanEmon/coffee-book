import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png";
import { addFavorite, getAllFavorites } from "../utils";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favorites = getAllFavorites();
    const isExist = favorites.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, [data, id]);
  console.log("from description: ", data);
  const {
    name,
    image,
    category,
    ingredients,
    nutrition_info,
    origin,
    type,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;

  //   add favorite
  const handleAddFavorite = (coffee) => {
    addFavorite(coffee);
    setIsFavorite(true);
  };
  return (
    <div className="my-12">
      {/* Description */}
      <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>
      {/* Image */}
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      {/* Title and Favorite Button*/}
      <div className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-thin">{name}</h1>
          <p className="text-base">Popularity : {popularity}</p>
          <p className="text-base">Rating: {rating}</p>
        </div>
        <div>
          <button
            onClick={() => handleAddFavorite(coffee)}
            disabled={isFavorite}
            className="btn btn-warning"
          >
            Add Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
