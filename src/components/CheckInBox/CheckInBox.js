import React, { useState, useCallback } from "react";
import "./CheckInBox.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const CheckInBox = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  //Visibility of SignUp After Creating the account
  const visibility = useCallback((isShow) => {
    setShowSignUp(isShow);
  }, []);

  return (
    <div className="checkin_box center">
      <div className="checkin_img">
        <img src='https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=740&t=st=1659969924~exp=1659970524~hmac=5fb8beb6a0787fb46174183828e5c278697a0498de2b51f1fd41f0b0d2b6d441'></img>
      </div>
      <div className="checking_details">
        <div style={{display:"flex"}}>
          <div
            className="login_heading"
            onClick={() => setShowSignUp(false)}
            style={{ color: showSignUp ? "#b7c0c9" : "#1a3b58" }}
          >
            <div>Log In</div>
            {!showSignUp && <div className="heading_hr"></div>}
          </div>
          <div
            className="signup_heading"
            onClick={() => setShowSignUp(true)}
            style={{ color: showSignUp ? "#1a3b58" : "#b7c0c9" }}
          >
            <div>Sign Up</div>
            {showSignUp && <div className="heading_hr"></div>}
          </div>
        </div>
     
      
    
        <hr className="hr_line"></hr>
        {showSignUp ? <Signup showSignUp={visibility} /> : <Login />}
      </div>
    </div>
  );
};

export default CheckInBox;
