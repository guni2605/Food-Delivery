import React, { useContext } from "react";
import "./Exploremenu.css";
import { menu_list } from "../../../assets/frontend_assets/assets";
import { Contextstore } from "../../../store/Contextstore.jsx";
function Exploremenu() {
  const { category } = useContext(Contextstore);
  console.log(category);
  const { setCategory } = useContext(Contextstore);
  return (
    <div className="menu-bar">
      <h2> Explore our menu</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        consequuntur numquam harum animi dignissimos voluptatem provident
        reprehenderit, eveniet accusantium aut voluptate illo quos quam veniam
        voluptas. Rerum aperiam nihil vel.
      </p>
      <div className="menu-items">
        {menu_list.map(({ menu_name, menu_image }) => {
          return (
            <div key={menu_name} className="item">
              <img
                className={category == menu_name ? "activate" : ""}
                onClick={() => setCategory(menu_name)}
                src={menu_image}
                alt=""
              />
              {menu_name}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exploremenu;
