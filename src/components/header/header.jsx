import { AppBar, Box, Button, Toolbar } from "@mui/material";
import "./header.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const displayDesktop = () => {
    return(
      <>
      <Toolbar className="tittle">
      Blogging
    </Toolbar>
      </>
    ) 
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
