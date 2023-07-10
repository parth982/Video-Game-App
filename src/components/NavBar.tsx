import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => (
  <HStack padding="10px">
    <Image boxSize="60px" src={logo} />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
