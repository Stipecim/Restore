import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FieldValue, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

import { useAppDispatch } from "../../app/store/configureStore";
import { signInUser } from "./accountSlice";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({ mode: "all" });

  async function stubmitForm(data: FieldValue<any>) {
    try {
      await dispatch(signInUser(data));
      navigate(location.state?.from || "/catalog");  
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box component="form" onSubmit={handleSubmit(stubmitForm)} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Username"
          autoFocus
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors?.username?.message?.toString()}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors?.password?.message?.toString()}
        />
        <LoadingButton
          disabled={!isValid}
          loading={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </LoadingButton>
        <Grid item>
          <Link to="/register">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Box>
    </Container>
  );
}
