import { List, ListItem, Heading, HStack, Button,Center } from "@chakra-ui/react";
interface Props {
  categories: string[];
  seletedCategory: string;
  onSelectedCategory: (category: string) => void;
}

const AsideBar = ({
  categories,
  seletedCategory,
  onSelectedCategory,
}: Props) => {
  return (
    <>
      <Center>
          <Heading color={'white'} fontSize="xl" my={'2rem'} >
            Categories
          </Heading>
      </Center>
      <Center>
          <List>
            {categories.map((category) => (
              <ListItem key={category} paddingY="5px">
                <HStack>
                  <Button
                    textAlign="center"
                    whiteSpace={"normal"}
                    fontWeight={category === seletedCategory ? "bold" : "normal"}
                    color={category=== seletedCategory ?"white":'grey'}
                    onClick={() => onSelectedCategory(category)}
                    variant="link"
                    fontSize="md"

                  >
                    {category.toLocaleUpperCase()}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
      </Center>
    </>
  );
};

export default AsideBar;
