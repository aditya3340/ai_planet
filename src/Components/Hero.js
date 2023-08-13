import React from "react";
import { Link } from "react-router-dom";
import hero from "../Assests/hero.png";
import {
  Button,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  Box,

} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bgColor={"green.400"} padding={"20px"}>
      <Box maxW={"85%"} margin={"auto"}>
        <SimpleGrid columns={[null, 1, 2]}>
          <Box margin={"auto"} maxW={{ sm: "100%" ,md: "85%"}}>
            <Heading fontSize={["3xl","4xl","5xl"]}>Hackathon Submissions</Heading>
            <Spacer h={7}></Spacer>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Urna cursus amet
              pellentesque in parturient purus feugiat faucibus. Congue laoreet
              duis porta turpis eget suspendisse ac pharetra amet. Vel nisl
              tempus nec vitae.{" "}
            </Text>
            <Spacer h={7}></Spacer>
            <Link to="/submission">
              <Button colorScheme={"facebook"}>
                <Text>Upload Submission</Text>
              </Button>
            </Link>
            <Spacer h={7}></Spacer>
          </Box>

          <Image
            margin={"auto"}
            src={hero}
            w={{ base: "0px", md: "200px", lg: "250px" }}
          ></Image>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Hero;
