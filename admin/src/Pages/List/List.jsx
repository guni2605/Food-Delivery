import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
function List({ url }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/v1/food/list`);
    if (response.data.success) {
      setList(response.data.data);
      console.log(response);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    //console.log(foodId);
    const response = await axios.post(`${url}/api/v1/food/remove`, {
      id: foodId,
    });
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container flex-col">
      <div className="list-table">
        <h1 className="heading">Food List</h1>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <hr />
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/` + item.image} />
            {/* {console.log("item.image")} */}
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className="remove">
              X
            </p>
          </div>
        ))}
        <hr className="ruler" />
      </div>
    </div>
  );
}

export default List;
