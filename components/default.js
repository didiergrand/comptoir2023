function Default(props) {

  const { post } = props;

  return (
      <div id={post.slug}>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="container" />
      </div>
  );
}

export default Default;
