import { Box, Link, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer">
    <Text as="small" color="gray.500" fontSize="12px">
      Made by
      <Link
        href="https://github.com/poetrainy"
        target="_blank"
        pl="4px"
        fontWeight="bold"
        textDecor="underline"
      >
        @poetrainy
      </Link>
      .
    </Text>
  </Box>
);

export default Footer;
