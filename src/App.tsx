import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import PrizeList from "./components/PrizeList";
import useData from "./service/apiData";
import categoryList from "./service/listSet";
import { useState } from "react";

function App() {
  const { data, error } = useData();
  const categories = categoryList(data)

  if (error)
    return (
      <>
        <Heading> {error}</Heading>
        <Text>the Api is giving cors error </Text>
      </>
    );
  return (
    <>
      <Grid
        templateAreas={`"side header" "side main"`}
        gridTemplateColumns={`125px`}
        gridTemplateRows={`70px`}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"side"} height={"100vh"}>
          side
        </GridItem>
        <GridItem
          pl="2"
          bg="white"
          area={"main"}
          padding={"1rem"}
          overflow={"scroll"}
        >
          <PrizeList data={data} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
