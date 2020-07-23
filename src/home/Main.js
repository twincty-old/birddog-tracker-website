import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar from "./sections/TopBar";
import Intro from "./sections/Intro";
import Footer from "./sections/Footer";
import CallToAction from "./sections/CallToAction";
import Testimonial from "./sections/Testimonial";
import MoreFeatures from "./sections/MoreFeatures";
import PreOrder from "./sections/PreOrder";
import FAQ from "./sections/FAQ";
import GetStarted from "./sections/GetStarted";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";

const Main = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <Intro />
      <Features />
      <MoreFeatures />
      <PreOrder />
      <Testimonial />
      <CallToAction />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Main;
