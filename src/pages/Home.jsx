import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  console.log("I am from home : ", categories);
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees By Categories"}
        subTitle={
          "Browse your desired coffee category to browse through specific that fit in your taste"
        }
      ></Heading>
      {/* Categories Tab Section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested Component */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
