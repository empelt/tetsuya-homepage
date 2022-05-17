import type { NextPage } from "next";
import { Container, Box, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} textAlign="center">
        im tetsuya
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tetsuya
          </Heading>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
