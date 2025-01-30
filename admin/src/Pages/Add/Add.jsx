import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import { assets } from "../../assets/admin_assets/assets";
import { toast } from "react-toastify";
function Add({ url }) {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salads",
    price: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmithandler = async (event) => {
    // web api
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    const response = await axios.post(`${url}/api/v1/food/add`, formData);
    console.log(response);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Salads",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmithandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log(image);
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-desciption flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            rows="6"
            value={data.description}
            onChange={onChangeHandler}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Salads">Salads</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Noddles">Noddles</option>
              <option value="Pasta">Pasta</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              type="Number"
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
