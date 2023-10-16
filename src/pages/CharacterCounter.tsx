import { FC, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { APP_NAME } from "~/constants/common";

const CharacterCounter: FC = () => {
  const [characters, setCharacters] = useState<string>("");

  return (
    <VStack
      alignItems="stretch"
      gap="16px"
      w="90vw"
      maxW="800px"
      m="auto"
      py="40px"
    >
      <Heading fontSize="32px">{APP_NAME}</Heading>
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
      <Text color="gray.500" fontSize="12px">
        Made by
        <Link
          href="https://github.com/poetrainy"
          target="_blank"
          px="4px"
          fontWeight="bold"
          textDecor="underline"
        >
          @poetrainy
        </Link>
        .
      </Text>
    </VStack>
  );
};

export default CharacterCounter;
