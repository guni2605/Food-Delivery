import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Contextstore } from "../../store/Contextstore";
import axios from "axios";
const Verify = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log(success, orderId);
  const { url } = useContext(Contextstore);
  const verifypayment = async () => {
    console.log(success);
    const response = await axios.post(url + "/api/v1/order/verify", {
      success,
      orderId,
    });
    console.log(success);
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifypayment();
  });
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
