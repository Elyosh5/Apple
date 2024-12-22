import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import scss from "./SignUp.module.scss";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
  const { register, error, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = () => {
    register(email, password, nickname);
  };
  return (
    <div className={scss.register}>
      <div className="container">
        <div className={scss.content}>
          {error && <Alert severity="error">{error}</Alert>}

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

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Nickname
            </InputLabel>
            <Input
              onChange={(e) => setNickname(e.target.value)}
              id="standard-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton></IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button onClick={handleRegister}>Sign Up</Button>

          <Button onClick={() => signInWithGoogle()}>
            <GoogleIcon /> Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
