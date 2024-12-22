import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import scss from "./SignIn.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    login(email, password);
  };
  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="standard-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton></IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <button onClick={handleLogin}>Sign In</button>
          <Typography>
            Don't have a account <Link to="/Register">sign up</Link>
          </Typography>

          <Button onClick={() => signInWithGoogle()}>
            <GoogleIcon /> Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
