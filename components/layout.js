import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import Loading from "./loading";
import InstagramImages from "./instagram";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>

        <InstagramImages />
      <Footer />
    </>
  );
};

export default Layout;