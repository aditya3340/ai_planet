import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  const submissions = useSelector((state) => state.submissions.data);

  //to toggle between all and fav submissions
  const [flag, setFlag] = useState(false);

  useEffect(()=> {
    setFlag(false)
  }, [])

  const subEl = submissions.map((item) => {
    return (
      <div key={item.title}>
        <Card sub={item} />
      </div>
    );
  });

  console.log(flag);

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="maxWidthDiv">
        <button className="home-btn" onClick={() => setFlag(false)}>
          All Submissions
        </button>
        <button className="home-btn" onClick={() => setFlag(true)}>
          Favourite Submissions
        </button>
      </div>
      {!flag ? (
        submissions.length === 0 ? <h1 className="navbar">No submissions Yet</h1> : <div className="container">{subEl}</div>
      ) : (
        <h1 className="navbar"> Favourites</h1>
      )}
    </div>
  );
};

export default Home;
