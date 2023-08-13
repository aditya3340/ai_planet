import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import { Button, SimpleGrid, Text, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  const submissions = useSelector((state) => state.submissions.data);

  //to toggle between all and fav submissions
  const [flag, setFlag] = useState(false);

  console.log(submissions);

  useEffect(() => {
    setFlag(false);
  }, []);

  const subEl = submissions.map((item) => {
    return (
      <div key={item.id}>
        <Card sub={item} />
      </div>
    );
  });

  console.log(flag);

  return (
    <div>
      <Navbar />
      <Hero />
      <Box maxW={"85%"} margin={"auto"} marginTop={"10px"}>
        <SimpleGrid
          columns={[1, 2, 2]}
          maxW={{ sm: "auto", md: "50%", lg: "40%" }}
        >
          <Button
            marginBottom={"10px"}
            paddingInline={"20px"}
            onClick={() => setFlag(false)}
          >
            <Text>All Submissions</Text>
          </Button>
          <Button
            colorScheme="blue"
            paddingInline={"20px"}
            onClick={() => setFlag(true)}
          >
            <Text>Favourite Submissions</Text>
          </Button>
        </SimpleGrid>
        {!flag ? (
          submissions.length === 0 ? (
            <Heading marginTop={"10px"}>No submissions Yet</Heading>
          ) : (
            <Box className="container">{subEl}</Box>
          )
        ) : (
          <Heading marginTop={"10px"}> Favourites</Heading>
        )}
      </Box>
      {/* <div className="maxWidthDiv">
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
      )} */}
    </div>
  );
};

export default Home;
