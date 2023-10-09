import { getPostBySlug } from './api';
import Photos from './photos';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const postData = await getPostBySlug(slug);

  if (!postData) {
    console.log('Post not found');
    return { notFound: true };
  }

  return {
    props: {
      postData,
    },
  };
}

function Post({ postData }) {
  return <Photos postData={postData} />;
}

export default Post;
