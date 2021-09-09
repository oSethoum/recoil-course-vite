import React from "react";
import "./index.css";
import Canvas from "./Canvas";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Atoms from "./examples/Atoms";
import { Selectors } from "./examples/Selectors";
const App = () => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/examples/atoms">
              <Atoms />
            </Route>
            <Route path="/examples/selectors">
              <Selectors />
            </Route>
            <Route>
              <Canvas />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
