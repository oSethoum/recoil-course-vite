import React, { Suspense } from "react";
import "./index.css";
import Canvas from "./Canvas";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Atoms from "./examples/Atoms";
import { Selectors } from "./examples/Selectors";
import { Async } from "./examples/Async";
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
            <Route path="/examples/async">
              <Async />
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
