import { List, ListItem, Text, Divider, Heading } from "@chakra-ui/react";
import { laureates } from "../service/apiData";


interface Props {
  laureates: laureates[];
}
const PersonList = ({ laureates }: Props) => {
  return (
    <List>
      {laureates?.map((l) => (
        <ListItem padding={".5rem"} key={l.id}>
          <Heading size={"sm"} color={'white'}> Name:{" "+l.firstname + " " + l.surname}</Heading>

          <Text fontWeight={"light"} my={"1rem"}>
            {l.motivation}
          </Text>
          <Divider />
        </ListItem>
      ))}
    </List>
  );
};

export default PersonList;
