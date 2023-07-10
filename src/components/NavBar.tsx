import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack padding="10px">
    <Image boxSize="60px" src={logo} />
    <SearchInput />
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
