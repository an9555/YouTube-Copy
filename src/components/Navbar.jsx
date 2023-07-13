import React from 'react'
import { Stack,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../untils/constants";
import { SearchBar } from "./";
const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2} sx={{position:'sticky',background:'#212A3E ',top:0,justifyContent:'space-between'}}>
   <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography style={{marginLeft:'10px',color:"#E6DDC4",fontFamily:"Orbit" ,fontWeight:'bold'}}>BuliBuli</Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar