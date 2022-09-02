import { FaSearch } from "react-icons/fa";

import { Wrapper, Input } from "./SearchInput.styles";

interface SearchInputProps {}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <Wrapper>
      <FaSearch />
      <Input placeholder="Search..." {...props} />
    </Wrapper>
  );
};
