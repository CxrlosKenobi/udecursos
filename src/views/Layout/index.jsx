import { Outlet } from "react-router-dom";
//
import Header from "../Header";
import Footer from "../Footer";
import "./index.scss";

export default function Layout() {
  const PageAnimationLayout = () => {
    const PageLayout = ({ children }) => children;

    return (
      <PageLayout>
        <Outlet />
      </PageLayout>
    )
  }

  return (
    <>
      <Header />
      <PageAnimationLayout />
      <Footer />
    </>
  );
}
