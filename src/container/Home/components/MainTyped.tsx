import { Box, styled } from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";

const MainTyped = () => {
  return (
    <Wrapper>
      <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
      <br />

      <ReactTyped
        strings={[
          "Search for products",
          "Search for categories",
          "Search for brands",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </ReactTyped>
    </Wrapper>
  );
};

export default MainTyped;

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    flexDirection: "column",
  };
});
