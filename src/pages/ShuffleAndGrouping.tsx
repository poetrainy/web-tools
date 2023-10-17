/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-irregular-whitespace */
import { FC, useState } from "react";
import {
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Layout from "~/components/Layout";
import { PROJECT_SHUFFLE_AND_GROUPING } from "~/constants/common";

const ShuffleAndGrouping: FC = () => {
  const [users, setUsers] = useState<string>("");
  const [groups, setGroups] = useState<string>("");

  const [resultGroups, setResultGroups] = useState<string[]>([]);
  const [resultGroupedUsers, setResultGroupedUsers] = useState<string[][]>([
    [],
  ]);

  const grouping = () => {
    const splitUsers: string[] = users.split(/(?:,)|(?:、)/);
    const splitGroups: string[] = groups.split(/(?:,)|(?:、)/);

    // @ts-ignore
    const shuffleArray = (array) => {
      if (array.length === 1) return array;

      const cloneArray = [...array];

      const result: string[] = cloneArray.reduce((_, cur, idx) => {
        const random = Math.floor(Math.random() * (idx + 1));
        cloneArray[idx] = cloneArray[random];
        cloneArray[random] = cur;
        return cloneArray;
      });

      return result;
    };

    const shuffledUsers: string[] = shuffleArray(splitUsers);

    setResultGroups(splitGroups);
    setResultGroupedUsers(
      splitGroups.map((_group, i) =>
        shuffledUsers.filter(
          (_user, i2) => i === i2 || i2 % splitGroups.length === i
        )
      )
    );
  };

  const erase = () => {
    setUsers("");
    setGroups("");
    setResultGroups([]);
    setResultGroupedUsers([[]]);
  };

  const elements = [
    {
      heading: "Users",
      component: (
        <Textarea
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          placeholder="Enter users"
        />
      ),
    },
    {
      heading: "Groups",
      component: (
        <Textarea
          value={groups}
          onChange={(e) => setGroups(e.target.value)}
          placeholder="Enter groups"
        />
      ),
    },
    {
      component: (
        <Flex gap="8px">
          <Button onClick={() => grouping()} w="fit-content">
            Go
          </Button>
          <Button variant="outline" onClick={() => erase()} w="fit-content">
            Erase all
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <Layout
      heading={PROJECT_SHUFFLE_AND_GROUPING.name}
      ogp={PROJECT_SHUFFLE_AND_GROUPING}
    >
      <VStack as="main" alignItems="stretch" gap="20px" p="0">
        <Text>
          To enter multiple users or groups, separate them with `,` or `、`.
        </Text>
        {elements.map((element) => (
          <VStack key={element.heading} alignItems="stretch" gap="8px" p="0">
            {element.heading && <Heading size="sm">{element.heading}</Heading>}
            {element.component}
          </VStack>
        ))}
        {!!resultGroups.length && !!resultGroupedUsers && (
          <VStack alignItems="stretch" gap="8px" p="0">
            <Heading fontSize="18px">Result</Heading>
            {resultGroups.map((group, index) => (
              <HStack key={group} gap="4px">
                <Flex>
                  <Text as="span" fontWeight="bold">
                    {group}
                  </Text>
                  <Text as="span">:</Text>
                </Flex>
                <Flex gap="4px">
                  {resultGroupedUsers[index].map((user, index2) => (
                    <Text as="span" key={user}>
                      {user}
                      {index2 + 1 !== resultGroupedUsers[index].length && ", "}
                    </Text>
                  ))}
                </Flex>
              </HStack>
            ))}
          </VStack>
        )}
      </VStack>
    </Layout>
  );
};

export default ShuffleAndGrouping;
