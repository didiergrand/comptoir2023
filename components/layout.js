import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import Loading from "./loading";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;