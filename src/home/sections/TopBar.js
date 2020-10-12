import React, { useState, useEffect } from "react";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";
import { Button } from "@material-ui/core";

const TopBar = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="./assets/images/react-logo.svg" alt="" />
        </div>
        <ul className="navigation">
          <li>
            <ScrollTo to="intro" onScroll={close}>
              Home
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="feature" onScroll={close}>
              Features
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="signup" onScroll={close}>
              SignUp
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="reviews" onScroll={close}>
              Reviews
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="download-app" onScroll={close}>
              App
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="faqs" onScroll={close}>
              FAQs
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="get-started" onScroll={close}>
              Demo
            </ScrollTo>
          </li>
        </ul>
        <div className="m-auto" />
        <div className="navigation flex">
          <a href="https://dashboard.birddogtracker.com/" className="mr-1">
            <Button
              className="box-shadow-none px-8 rounded-l hover-bg-primary capitalize"
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
          </a>
          <a href="https://dashboard.birddogtracker.com/" className="mr-1">
            <Button
              className="box-shadow-none px-8 rounded-r hover-bg-primary capitalize"
              variant="outlined"
              color="primary"
            >
              Signup
            </Button>
          </a>
        </div>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar;
