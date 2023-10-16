import { extendTheme } from "@chakra-ui/react";

const colors = {};
const styles = {
  global: {
    body: {
      color: "gray.800",

      li: {
        listStyleType: "none",
      },
    },
    "::selection": {
      background: "gray.100",
    },
    "::-moz-selection": {
      background: "gray.100",
    },
  },
};
const fonts = {};
const breakpoints = {};
const textStyles = {};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
