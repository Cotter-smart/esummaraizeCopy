import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";
import '@mantine/dates/styles.css';

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};
