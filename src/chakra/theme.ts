import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
    color: "#000000",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
