import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorite } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffee(favorites);
  }, []);
  const handleRemoveFavoriteCoffee = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setCoffee(favorites);
  };

  return (
    <>
      <Heading
        title={"Welcome To Dashboard"}
        subTitle={
          "Manage coffee that you are already previously added as favorite. You can view more them from here"
        }
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffee.map((item) => (
          <Card
            key={item.id}
            coffee={item}
            handleRemoveFavoriteCoffee={handleRemoveFavoriteCoffee}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
