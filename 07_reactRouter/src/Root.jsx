import { Outlet } from "react-router";
import { Header, Footer } from "./components";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root