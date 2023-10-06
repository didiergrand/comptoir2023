import Layout from "@component/components/layout";
import Loading from "@component/components/loading";
import instagram from "@component/components/instagram"; 
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
        <Image src={banner} alt="Banner du Comtoir de la Veveyse 2023"/>
        <div className="container mt-20">
        <div className="md:grid md:grid-cols-12">
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="md:col-start-1 md:col-end-8"
          />
          
          <div className="md:col-start-9 md:col-end-13 pt-0 md:pt-20 lg:pt-10">
            <Image src={affiche} alt="Affiche du Comptoir de la Veveyse 2023"/>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
