import Layout from "@component/components/layout";
import Loading from "@component/components/loading";
import QuickLinks from "@component/components/quicklinks";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://comptoir-veveyse.ch/wp-json/wp/v2/pages/2510`)
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
    <div>
      <div id={post.slug}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className="container"
        />
      </div>
    </div>
    </Layout>
  );
};

export default Home;
