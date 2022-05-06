import { Box, Container, styled } from "@mui/material";
import React from "react";

import { Head } from "~/components/Head";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <>
      <Head title={props.title} />
      <Body>{props.children}</Body>
    </>
  );
};

const Body = styled((props: { className?: string; children: React.ReactNode }) => {
  return (
    <Box className={props.className}>
      <Container>{props.children}</Container>
    </Box>
  );
})(() => {
  return {
    height: `calc(100vh)`,
    overflow: "auto",
  };
});
