import toast, { Toaster } from "react-hot-toast";
// Get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

// Add a coffee to local storage
function addFavorite(coffee) {
  console.log(coffee);
  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.id == coffee.id);
  if (isExist) return toast.error("This coffee already exist.");
  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully Added!");
}

// Remove a coffee from local storage
function removeFavorite(id) {
  const favorites = getAllFavorites();
  const remaining = favorites.filter((item) => item.id != id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
}

export { addFavorite, getAllFavorites, removeFavorite };
