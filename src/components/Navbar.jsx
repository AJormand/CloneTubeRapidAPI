import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./index";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: "#F31503",
            display: { xs: "none", sm: "block" },
          }}
          ml={1}
        >
          CloneTube
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
