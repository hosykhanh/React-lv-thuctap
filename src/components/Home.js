import React from "react";
import myPicture from "../assets/images/anh1.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="mt-4">
        <h1>Hồ Sỹ Khanh</h1>
        <h2>CT050425</h2>
      </div>
      <div className="home-anh row">
        <img
          src={myPicture}
          alt="khanh"
          height="auto"
          width="auto"
          className="col-md-3 col"
        />
        <img
          src={myPicture}
          alt="khanh"
          height="auto"
          width="auto"
          className="col-md-3 col"
        />
        <img
          src={myPicture}
          alt="khanh"
          height="auto"
          width="auto"
          className="col-md-3 col"
        />
      </div>
    </div>
  );
};

export default Home;
