import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useState, ChangeEvent } from "react";
import logo from "../../assets/logo.png";
import {
  Container,
  FormControl,
  BottomNavigation,
  Card,
  TextField,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useStyles } from "./styles";
import { RootState, useAppDispatch, useAppStateSelector } from "~/redux";
import { LoginPayload, LoginState } from "~/redux/auth/types";
import { login } from "~/redux/auth/actions";
// import validator from "validator";
type Error = { status: boolean; helperText: string };

type ParametersError = {
  email: Error;
  password: Error;
};

export const Login = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [userAuth, setUserAuth] = React.useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<ParametersError>({
    email: { status: false, helperText: "" },
    password: { status: false, helperText: "" },
  });

  const [requestSucceeded, setRequestSucceeded] = React.useState(false);

  const loginState = useAppStateSelector<LoginState>(
    (state: RootState) => state.auth
  );

  const loginUser = () => {
    dispatch(login(userAuth)).then((user: any) => {
      if (user) {
        console.log(user)
      } else {
        checkValidCredentials();
      }
      return user;
    });
  };

  const onUserUpdate = (user: LoginPayload) => {
    setUserAuth(user);
  };

  // const checkMandatoryInputFields = (user: LoginPayload) => {
  //   if (!validator.isEmail(user.email)) {
  //     return true;
  //   }
  //   return false;
  // };

  const checkValidCredentials = () => {
    setErrors({
      ...errors,
      email: {
        status: true,
        helperText: "",
      },
      password: {
        status: true,
        helperText: "Wrong password or username",
      },
    });
  };

  // const checkValidEmail = (
  //   event: ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   if (!event.target.value) {
  //     setErrors({
  //       ...errors,
  //       email: {
  //         status: true,
  //         helperText: "required",
  //       },
  //     });
  //   } else if (event.target.value && !validator.isEmail(event.target.value)) {
  //     setErrors({
  //       ...errors,
  //       email: {
  //         status: true,
  //         helperText: "required",
  //       },
  //     });
  //   } else {
  //     setErrors({
  //       ...errors,
  //       email: {
  //         status: false,
  //         helperText: "",
  //       },
  //     });
  //   }
  // };

  useEffect(() => {
    onUserUpdate(userAuth);
  }, [onUserUpdate, userAuth]);

  if (shouldRedirect) {
    return <Redirect to={"/home"} />;
  }

  if (requestSucceeded) {
    setShouldRedirect(true);
  }

  return (
    <>
      <Container className={classes.mainContainer}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Box sx={{ paddingTop: 10 }}>
              <Card sx={{ margin: "auto", width: "50%" }}>
                <CardContent>
                  <Typography variant="body2">
                    <FormControl>
                      <Grid item xs={12} className={classes.photo}>
                        <img src={logo} alt="logo" width="100" />
                      </Grid>

                      <TextField
                        required
                        id="filled-email-input"
                        label="Email"
                        type="email"
                        onChange={(e) => {
                          // setErrors({
                          //   ...errors,
                          //   email: { status: false, helperText: "" },
                          // });
                          setUserAuth({
                            ...userAuth,
                            email: e.target.value,
                          });
                        }}
                        // error={errors.email.status}
                        // helperText={errors.email.helperText}
                        variant="filled"
                        name="email"
                        value={userAuth.email}
                      />
                      <TextField
                        required
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        onChange={(e) => {
                          // setErrors({
                          //   ...errors,
                          //   password: { status: false, helperText: "" },
                          // });
                          setUserAuth({
                            ...userAuth,
                            password: e.target.value,
                          });
                        }}
                        // error={errors.email.status}
                        // helperText={errors.email.helperText}
                        variant="filled"
                        name="password"
                        value={userAuth.password}
                      />

                      <Button
                        // disabled={checkMandatoryInputFields(userAuth)}
                        variant="contained"
                        size="large"
                        onClick={() => loginUser()}
                      >
                        Log In
                      </Button>

                      <hr />
                      <hr />
                    </FormControl>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
