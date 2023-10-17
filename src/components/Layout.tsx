import { FC } from "react";
import { VStack, Heading } from "@chakra-ui/react";
import Footer from "~/components/Footer";
import HeadOgp from "~/components/HeadOgp";
import { OgpType } from "~/types/common";

type Props = {
  children: JSX.Element;
  heading: string;
  ogp?: OgpType;
};

const Layout: FC<Props> = ({ children, heading, ogp }) => {
  return (
    <>
      <HeadOgp ogp={ogp} />
      <VStack
        alignItems="stretch"
        gap="16px"
        w="90vw"
        maxW="800px"
        m="auto"
        py="40px"
      >
        <Heading fontSize="32px">{heading}</Heading>
        {children}
        <Footer />
      </VStack>
    </>
  );
};

export default Layout;
