import { FC } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  APP_NAME,
  PROJECT_CHARACTER_COUNTER,
  PROJECT_SHUFFLE_AND_GROUPING,
} from "~/constants/common";
import Layout from "~/components/Layout";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const projects = [PROJECT_CHARACTER_COUNTER, PROJECT_SHUFFLE_AND_GROUPING];

  return (
    <Layout heading={APP_NAME}>
      <HStack>
        {projects.map((project) => (
          <Link key={project.name} to={project.path}>
            <Card overflow="hidden" variant="outline">
              <CardHeader>
                <Heading size="md"> {project.name}</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text>{project.description}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </HStack>
    </Layout>
  );
};

export default Home;
