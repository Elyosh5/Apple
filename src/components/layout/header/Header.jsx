import React from "react";
import scss from "./Header.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
import WorkIcon from "@mui/icons-material/Work";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AdminPanel from "../../admin/AdminPanel";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useProduct } from "../../../context/ProductContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AccountCircle } from "@mui/icons-material";
import { useAuth } from "../../../context/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  fontSize: "13.5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Header = () => {
  const { user, logout } = useAuth();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { searchProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <AppleIcon className={scss.logo} />
          <Link to="/list">
            <p>Store</p>
          </Link>
          <Link to="/Mac">
            <p>Mac</p>
          </Link>
          <Link to="iPad">
            <p>iPad</p>
          </Link>
          <Link to="iPhone">
            <p>iPhone</p>
          </Link>
          <Link to="Watch">
            <p>Watch</p>
          </Link>
          <Link to="Vision">
            <p>Vision</p>
          </Link>
          <Link to="AirPods">
            <p>AirPods</p>
          </Link>
          <Link to="TV">
            <p>TV & Home</p>
          </Link>
          <Link to="Entertainment">
            <p>Entertainment</p>
          </Link>
          <Link to="Accessories">
            <p>Accessories</p>
          </Link>
          <Link to="Support">
            <p>Support</p>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon className={scss.search_icon} />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                searchProduct(e.target.value);
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton onClick={() => navigate("cart")}>
            <WorkIcon className={scss.bag} />
          </IconButton>

          {user ? (
            <div>
              <AdminPanel />

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src={user.photoURL} />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="Login">
                  <MenuItem onClick={handleClose}>Sign in</MenuItem>
                </Link>
                <Link to="Register">
                  <MenuItem onClick={handleClose}>Sign up</MenuItem>
                </Link>
                <MenuItem onClick={logout}>Log out</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="Login">
                  <MenuItem onClick={handleClose}>Sign in</MenuItem>
                </Link>
                <Link to="Register">
                  <MenuItem onClick={handleClose}>Sign up</MenuItem>
                </Link>
                <MenuItem onClick={() => logout()}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
