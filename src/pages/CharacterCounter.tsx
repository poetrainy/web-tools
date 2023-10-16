import { FC, useState } from "react";
import { Button, Flex, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import Layout from "~/components/Layout";
import { PROJECT_NAME } from "~/constants/common";

const CharacterCounter: FC = () => {
  const [characters, setCharacters] = useState<string>("");

  return (
    <Layout title={PROJECT_NAME}>
      <VStack as="main" alignItems="stretch" p="0">
        <HStack justifyContent="space-between">
          <Flex gap="4px">
            <Text as="span" fontWeight="bold">
              {characters.length}
            </Text>
            characters
          </Flex>
          <Button
            onClick={() =>
              setCharacters(() => {
                return "";
              })
            }
          >
            Erase all
          </Button>
        </HStack>
        <Textarea
          value={characters}
          onChange={(e) => setCharacters(e.target.value)}
          placeholder="Enter characters"
          h="400px"
          fontSize="16px"
        />
      </VStack>
    </Layout>
  );
};

export default CharacterCounter;
