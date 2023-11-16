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
}

const PrizeList = ({ data }: Props) => {
  return (
    <>
      {data?.map((m) => (
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
