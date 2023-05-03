import MainLayout from "./layouts/MainLayout";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Calendar from "./pages/Calendar";
import Clients from "./pages/Clients";
import AllMeetings from "./pages/AllMeetings";

function App() {
  const [openModal, setOpenModal] = useState("none");
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <div
        className="modal-wrapper"
        style={{ display: openModal }}
        onClick={() => setOpenModal("none")}
      ></div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
            // user={user}
            >
              <Outlet />
            </MainLayout>
          }
        >
          <Route
            index
            element={<Calendar open={openModal} setOpen={setOpenModal} />}
          />
        </Route>
        <Route
          path="/clients"
          element={
            <MainLayout
            // user={user}
            >
              <Outlet />
            </MainLayout>
          }
        >
          <Route index element={<Clients />} />
        </Route>
        <Route
          path="/allMeetings"
          element={
            <MainLayout
            // user={user}
            >
              <Outlet />
            </MainLayout>
          }
        >
          <Route index element={<AllMeetings />} />
        </Route>
        {/* <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
