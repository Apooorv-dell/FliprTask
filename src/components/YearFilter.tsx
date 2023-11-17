import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
interface Props {
  years: string[];
  onSelectedYear: (year: string) => void;
  selectedYear: string;
}

const YearFilter = ({ years, onSelectedYear, selectedYear }: Props) => {
  return (
    <>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {selectedYear || "Year"}
          </MenuButton>
          <MenuList overflow={"scroll"}>
            {years.map((year) => (
              <MenuItem
                onClick={() => onSelectedYear(year)}
                color={"white"}
                key={year}
              >
                {year}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default YearFilter;
