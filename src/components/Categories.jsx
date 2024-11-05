import { NavLink, useParams } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log("I am from Categories: ", categories);
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

// role="tab"
// className="tab"
