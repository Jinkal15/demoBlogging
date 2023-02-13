import React from "react";
import { Box } from "@mui/material";
import "./blogCards.css";
import Header from "../header/header";
import Card1 from "../card/card1";
import { useState } from "react";
import Card2 from "../card/card2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Card3 from "../card/card3";

export default function Body() {
  const [cardNo, setCardNo] = useState();
  const Navigate = useNavigate();
  return (
    <>
      <Header />
      <Box className="main_div">
        <Box
          className="product"
          onClick={() => {
            Navigate("/headphone-contained");
          }}
        >
          <Card1 />
        </Box>

        <Box
          className="product"
          onClick={() => {
            Navigate("/watches-contained");
          }}
        >
          <Card2 />
        </Box>
        <Box
          className="product"
          onClick={() => {
            Navigate("/bottles-contained");
          }}
        >
          <Card3 />
        </Box>
      </Box>
    </>
  );
}
