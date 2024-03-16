import React from "react";
import { BRouter, MyRoute } from "simple-react-router-x";
import Header from "./components/Yesh/header/HeaderWrapper";
import Loader from "./components/Yesh/util/Loader";
import { Provider } from "react-redux";
import { store } from "./components/sk/state/store";
import "./app.css";

export default function App() {
  return (
    <>
      <BRouter>
        <div className="app-wrapper">
          <div className="app-wrapper-over">
            <Header />

            <MyRoute
              path={"/"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/home.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/events"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/events.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/events/ticket"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/buytickets.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/events/ticket/checkout"}
              component={
                <SkWrapper>
                  <Loader path={"../sk/pages/checkout.jsx"} />
                </SkWrapper>
              }
            />
            <MyRoute
              path={"/service"}
              component={<Loader path={"/Services/ServicesWrapper.jsx"} />}
            />
          </div>
        </div>
      </BRouter>
    </>
  );
}
function SkWrapper({ children }) {
  return (
    <Provider store={store}>
      <div style={{ padding: "150px 50px 0 50px", paddingTop: "150px" }}>
        {children}
      </div>
    </Provider>
  );
}
