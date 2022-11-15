import Phonebook from 'components/Phonebook/Phonebook'
import { Box } from "components/utils/Box";

export const App = () => {
  return (
    <Box width="400px"
      ml="auto"
      mr="auto"
      mt="50px"
      bg="white"
      borderRadius="normal"
      boxShadow="shadow"
      as="div">
      <Phonebook />
    </Box>
  );
};
