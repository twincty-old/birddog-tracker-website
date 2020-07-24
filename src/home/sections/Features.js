import React from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import DoneIcon from "@material-ui/icons/Done";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import DashboardIcon from "@material-ui/icons/Dashboard";

const tubeStyle = {
  height: 64,
  width: 14,
  borderRadius: 300,
  marginTop: 12,
  marginRight: 6,
  transform: "rotate(28deg)",
  transformOrigin: "center center",
};

const useStyles = makeStyles(({ palette, ...theme }) => ({
  featureTitle: {},
  tube1: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.1)",
  },
  tube2: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.18)",
  },
  tube3: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.25)",
  },
  card: {
    border: "1px solid rgba(0,0,0,0.1)",

    "& .icon-wrapper": {
      position: "relative",
      zIndex: 3,
      marginRight: 80,
      "&:after": {
        content: '" "',
        position: "absolute",
        height: 210,
        width: 203,
        left: -112,
        top: -83,
        background: "rgba(var(--primary), 0.1)",
        transform: "rotate(-30deg)",
        transformOrigin: "center center",
        borderRadius: 32,
        zIndex: -1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      margin: 0,
    },
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <section className="section" id="feature">
      <div className="container">
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <div className="flex items-center">
              <h1 className="font-normal text-48 m-0 relative inline-bock text-primary">
                Vendor System
              </h1>
              <div className="flex ml--4">
                <div className={classes.tube1}></div>
                <div className={classes.tube2}></div>
                <div className={classes.tube3}></div>
              </div>
            </div>

            <p className="my-10 max-w-400">
              We are allowing unlimited vendors for free if you have a paid
              account. Each vendor has it's own dashboard which is different
              from main user and limited access. Vendor can upload photos/files
              about properties and can perform only limited actions on this
              property.
            </p>
            <div>
              {[
                "Unlimited vendors account for paid account holder.",
                "Mobile app for vendors to upload photos/files",
                "Seperate dashboard for each vendor",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <DoneIcon className="mr-4" color="primary" />
                  <p className="my-2 max-w-400">{item}</p>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card
              elevation={0}
              className={clsx(
                "border-radius-8 p-6 mb-4 flex items-center",
                classes.card
              )}
            >
              <div className="icon-wrapper my-4">
                <PhoneAndroidIcon color="primary" className="text-72" />
              </div>
              <div className="max-w-400">
                <h4 className="mt-0 mb-4 font-medium">Mobile App</h4>
                <p className="m-0">
                  We have also mobile apps on both andorid and apple store for
                  vendors. Which help alot to vendors when they have to upload
                  photos/files about specific property.
                </p>
              </div>
            </Card>
            <Card
              elevation={0}
              className={clsx(
                "border-radius-8 p-6 flex items-center",
                classes.card
              )}
            >
              <div className="icon-wrapper my-4">
                <DashboardIcon color="primary" className="text-72" />
              </div>
              <div className="max-w-400">
                <h4 className="mt-0 mb-4 font-medium">Personal Dashboard</h4>
                <p className="m-0">
                  Each vendor has it's own dashboard which is different from
                  main user and limited access. Vendor can upload photos/files
                  about properties and can perform only limited actions on this
                  property.
                </p>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Features;
