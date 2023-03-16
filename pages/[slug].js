import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from "@component/components/layout";
import Default from "@component/components/default";
import Programme from "@component/components/programme";

const Page = (props) => {
  const router = useRouter()
  const { slug } = router.query

  const { post } = props;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (props.notFound) {
    return <div>Page not found</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  let Component = Default;
  if(post.slug === 'programme') Component = Programme;

  return (
    <Layout>
        <Component post={post} />
    </Layout>
  );
};

export default Page;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    const response = await axios.get(`https://admin.comptoir-veveyse.ch/wp-json/wp/v2/pages?slug=${slug}`);
    const post = response.data[0];

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}
