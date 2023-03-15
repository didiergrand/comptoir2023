import axios from 'axios';
import Layout from "@component/components/layout";

const Page = (props) => {
  const { post } = props;

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
        <div id={post.slug}>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="container" />
        </div>
    </Layout>
  );
};

export default Page;
