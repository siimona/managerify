import {
  Container,
  Grid,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import { useStyles } from "./styles";
import { deepOrange } from "@mui/material/colors";
import { CurrentUser } from "~/redux/auth/types";
import { useAppStateSelector } from "~/redux";

export const Profile = () => {
  const classes = useStyles();
  const authUser = useAppStateSelector<CurrentUser>((s) => s.auth.currentUser);

  return (
    <>
      <Container>
        <Grid container direction="row">
          <Grid item xs={7} sm={9} md={10}>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              className={classes.header}
            >
              <Grid item xs={4} className={classes.avatar}>
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 150, height: 150 }}
                ></Avatar>
              </Grid>

              <Grid item xs={8}>
                <Grid container item direction="row">
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      noWrap
                      component="div"
                      className={classes.username}
                    >
                      {authUser.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6"> {authUser.role} </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="row" className={classes.body}>
              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  className={classes.propertyLabel}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6"> Name </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  className={classes.propertyLabel}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6"> Email </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  className={classes.propertyLabel}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6"> Phone </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container direction="row">
                  <Grid item xs={12} className={classes.property}>
                    <TextField
                      required
                      id="filled-email-input"
                      label=""
                      type="text"
                      variant="outlined"
                      name="name"
                      defaultValue={authUser.name}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.property}>
                    <TextField
                      required
                      id="filled-email-input"
                      label=""
                      type="text"
                      variant="outlined"
                      name="name"
                      defaultValue={authUser.email}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.property}>
                    <TextField
                      required
                      id="filled-email-input"
                      label=""
                      type="text"
                      variant="outlined"
                      name="name"
                      defaultValue={authUser.phone}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
