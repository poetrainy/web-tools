import { FC } from "react";
import { VStack, Heading } from "@chakra-ui/react";
import Footer from "~/components/Footer";
import HeadOgp from "~/components/HeadOgp";

type Props = {
  title: string;
  children: JSX.Element;
};

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <HeadOgp />
      <VStack
        alignItems="stretch"
        gap="16px"
        w="90vw"
        maxW="800px"
        m="auto"
        py="40px"
      >
        <Heading fontSize="32px">{title}</Heading>
        {children}
        <Footer />
      </VStack>
    </>
  );
};

export default Layout;
