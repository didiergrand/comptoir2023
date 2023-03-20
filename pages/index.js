import Layout from "@component/components/layout";
import Loading from "@component/components/loading";
import QuickLinks from "@component/components/quicklinks";
import Image from "next/image";
import affiche from "../public/affiche23.jpg";
import banner from "../public/ComptoiredelaVeveyse-banner3.png";

import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://admin.comptoir-veveyse.ch/wp-json/wp/v2/pages/2574`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) {
    return <Loading />;
  }

  return (
    <Layout>
      <div id={post.slug}>
        {/* add 2 cols grid from tailwindcss */}
        {/* .container */}
        <Image src={banner} alt="banner 23"/>
        <div className="container mt-20">
        <div className="grid grid-cols-12">
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="col-start-1 col-end-7"
          />
          
          <div className="col-start-9 col-end-13">
            <Image src={affiche} alt="Affiche 23"/>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
