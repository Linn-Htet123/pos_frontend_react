import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/Header/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import { routes } from "./Route/data";

function App() {
  return (
    <section className=" bg-[#28243d] mainSection flex relative justify-end  w-full h-screen ">
      <BrowserRouter>
        <SideBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((route) =>
            route.children.map((general, index) => {
              return (
                <>
                  <Route
                    key={index}
                    path={general.path}
                    element={general.Component}
                  />
                  {general?.children &&
                    general.children.map((children, index) => {
                      return (
                        <Route
                          key={index}
                          path={children.path}
                          element={children.Component}
                        />
                      );
                    })}
                </>
              );
            })
          )}
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
