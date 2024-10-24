import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { LayoutProps } from "../types/childernType";

const Layout = ({
  children,
  showHeaderFooter
}:LayoutProps) => {
  return (
    <>
      {showHeaderFooter && <Header />}
      <main>{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  )
};

export default Layout;