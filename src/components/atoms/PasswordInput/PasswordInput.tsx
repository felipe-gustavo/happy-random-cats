import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

export function PasswordInput(props: Omit<TextFieldProps, "type">) {
  const [showPassword, setShowPassword] = useState(false);

  const handlerClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      {...props}
      type={showPassword ? undefined : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handlerClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
