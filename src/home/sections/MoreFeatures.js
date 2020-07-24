import React from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { SdCard } from "@material-ui/icons";
import DoneIcon from "@material-ui/icons/Done";
import SpeedIcon from "../common/icons/SpeedIcon";

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
      marginLeft: 80,
      "&:after": {
        content: '" "',
        position: "absolute",
        height: 210,
        width: 203,
        right: -112,
        top: -83,
        background: "rgba(var(--primary), 0.1)",
        transform: "rotate(30deg)",
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

const MoreFeatures = () => {
  const classes = useStyles();

  return (
    <section className="section pt-0">
      <div className="container">
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Card
              elevation={0}
              className={clsx(
                "border-radius-8 p-6 mb-4 flex items-center",
                classes.card
              )}
            >
              <div className="max-w-400">
                <h4 className="mt-0 mb-4 font-medium">Speed Site</h4>
                <p className="m-0">
                  Site dashboard is designed on very high tech which is very
                  fast even it work on low internet. So you don't have to worry
                  about site speed when you and your vendors working in
                  dashboard panel.
                </p>
              </div>
              <div className="icon-wrapper my-4">
                <SpeedIcon color="primary" className="text-72" />
              </div>
            </Card>
            <Card
              elevation={0}
              className={clsx(
                "border-radius-8 p-6 flex items-center",
                classes.card
              )}
            >
              <div className="max-w-400">
                <h4 className="mt-0 mb-4 font-medium">Disk Space</h4>
                <p className="m-0">
                  Mostly vendors need to upload photos about specific properties
                  which you assign to them. There is no space limit. Vendors can
                  upload unlimited number of photos/files.
                </p>
              </div>
              <div className="icon-wrapper my-4">
                <SdCard color="primary" className="text-72" />
              </div>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12}>
            <div className="flex justify-end">
              <div className="max-w-400">
                <div className="flex items-center">
                  <h1 className="font-normal text-48 m-0 relative inline-bock text-primary">
                    Best Features
                  </h1>
                  <div className="flex ml--4">
                    <div className={classes.tube1}></div>
                    <div className={classes.tube2}></div>
                    <div className={classes.tube3}></div>
                  </div>
                </div>

                <p className="my-10 max-w-400">
                  Birddog tracker provide you best user experenice while working
                  on your properties or with your vendors. Allow unlimited
                  vendors for free. No disk space limit.
                </p>
                <div>
                  {[
                    "Unlimited disk space to upload photos/files",
                    "Speed site which work well with slow internet",
                    "Map to view your birddog properties",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <DoneIcon className="mr-4" color="primary" />
                      <p className="my-2 max-w-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default MoreFeatures;
