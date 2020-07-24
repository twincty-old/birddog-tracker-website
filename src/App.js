import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";
import Main from "./home/Main";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
          <Router basename="/">
            <Switch>
              <Route path="/" component={Main} exact />
              {/* <Route component={Error} /> */}
            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
