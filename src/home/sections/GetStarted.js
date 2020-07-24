import React from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const GetStarted = () => {
  return (
    <section className="section section-bg-light-primary" id="get-started">
      <div className="container">
        <div className="text-center mx-auto">
          <h1 className="mt-0 font-normal text-44 text-primary">Get Started</h1>
          <p className="max-w-400 mx-auto mb-14">
            Start using our platform. Not sure about Pro account, try Trail
            first. We are providing 7 days free trail without any credit card
            requirement
          </p>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 px-6"
            >
              WATCH VIDEO
              <div className="bg-primary ml-2 w-20 h-20 rounded flex justify-center items-center">
                <PlayArrowIcon className="text-white text-13" />
              </div>
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="border-radius-8 px-6"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
