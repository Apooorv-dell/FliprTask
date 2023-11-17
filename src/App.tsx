import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import PrizeList from "./components/PrizeList";
import useData from "./service/apiData";
import YearFilter from "./components/YearFilter";
import Years from "./service/yearList";
import getDublictes from "./service/doubleNoble";

import { useState } from "react";
import AsideBar from "./components/AsideBar";

function App() {
  const { data, error } = useData();
  console.log(getDublictes(data));

  const categories = [
    "all",
    "chemistry",
    "economics",
    "literature",
    "peace",
    "physics",
    "medicine",
  ];

  const [seletedCategory, setSelectedCategory] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

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
        gridTemplateColumns={`150px`}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"} padding={"1rem"}>
          <NavBar />
          <YearFilter
            years={Years}
            selectedYear={selectedYear}
            onSelectedYear={(year) => setSelectedYear(year)}
          />
        </GridItem>
        <GridItem pl="2" area={"side"} height={"100vh"} position={"fixed"}>
          <AsideBar
            categories={categories}
            seletedCategory={seletedCategory}
            onSelectedCategory={(category) => setSelectedCategory(category)}
          />
        </GridItem>
        <GridItem
          pl="2"
          bg="white"
          area={"main"}
          padding={"1rem"}
          overflow={"scroll"}
        >
          <PrizeList
            data={data}
            selectedCategory={seletedCategory}
            selectedYear={selectedYear}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
