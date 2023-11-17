import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Spacer,
  Text,
  Tag,
} from "@chakra-ui/react";

import PersonList from "./PersonList";
import { Prize } from "../service/apiData";

interface Props {
  data: Prize[] | null;
  selectedCategory: string;
  selectedYear: string;
}

const PrizeList = ({ data, selectedCategory, selectedYear }: Props) => {
  let filteredData;
  //  filteredData = data?.filter((d)=> d.year === selectedYear)
  filteredData = data?.filter((item) => {
    if (selectedCategory && selectedYear) {
      return item.category === selectedCategory && item.year === selectedYear;
    } else if (selectedCategory) {
      return item.category === selectedCategory;
    } else if (selectedYear) {
      return item.year === selectedYear;
    } else {
      return true;
    }
  });
  if (selectedCategory === "all" || selectedYear==='Year') filteredData = data;
  

  return (
    <>
      {filteredData?.map((m) => (
        <Card my={"5px"} key={m.year.toString() + m.category.toString()}>
          <CardHeader>
            <Flex>
              <Text color={"white"}>
                Category: {" " + m.category.toUpperCase()}
              </Text>
              <Spacer />
              <Tag size={"md"} variant="solid" bg={"tomato"}>
                {m.year}
              </Tag>
            </Flex>
          </CardHeader>
          <CardBody>
            <PersonList laureates={m.laureates} />
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default PrizeList;
