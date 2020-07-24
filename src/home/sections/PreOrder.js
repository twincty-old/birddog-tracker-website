import React from "react";
import { Card, Button, Divider, Icon, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TieIcon from "../common/icons/TieIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    position: "relative",
    overflow: "visible",
    "&:before": {
      content: '" "',
      position: "absolute",
      height: 350,
      width: 350,
      left: -450,
      top: "75%",
      background: "rgba(var(--primary), 0.1)",
      transform: "translateY(-50%)",
      transform: "rotate(40deg)",
      transformOrigin: "top right",
      borderRadius: "15%",
      zIndex: -1,
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      height: 350,
      width: 350,
      right: -450,
      top: "25%",
      background: "rgba(var(--primary), 0.1)",
      transform: "translateY(-50%)",
      transform: "rotate(-60deg)",
      transformOrigin: "top left",
      borderRadius: "15%",
      zIndex: -1,
    },
  },
}));

const PreOrder = () => {
  const classes = useStyles();

  const featureList = [
    "Unlimited Disk Space",
    "Unlimited Vednors",
    "Seperate Dashboard for vendors",
    "Enhanced Security",
    "Many more...",
  ];

  return (
    <section className="section" id="signup">
      <div className="container text-center">
        <h1 className="mt-0 font-normal text-44 mx-auto">
          Start <span className="text-primary">Today</span>
        </h1>
        <p className="mb-16 max-w-400 mx-auto">
          Start using our platform. Not sure about Pro account, try Trail first.
          We are providing 7 days free trail without any credit card
          requirement.
        </p>
        <Card
          className={clsx("py-10 px-6 max-w-550 mx-auto", classes.card)}
          elevation={3}
        >
          <div className="flex items-center mb-6">
            <IconButton className="mr-4 p-3 bg-light-primary rounded hover-bg-primary">
              <TieIcon color="primary" fontSize="large" />
            </IconButton>
            <div>
              <h3 className="text-primary m-0">Business</h3>
              <p className="m-0">
                ${" "}
                <span className="text-32 font-medium text-primary">19.97</span>
                /mo
              </p>
            </div>
          </div>
          <Divider className="bg-primary"></Divider>

          <div className="my-8">
            {featureList.map((item, ind) => (
              <div key={ind} className="flex items-center">
                <Icon className="mr-4" color="primary">
                  done
                </Icon>
                <p className="my-2">{item}</p>
              </div>
            ))}
          </div>

          <Button className="rounded px-6" variant="contained" color="primary">
            SignUp Now
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default PreOrder;
