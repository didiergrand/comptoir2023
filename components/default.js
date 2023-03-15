function Default(props) {

  const { post } = props;

  return (
      <div id={post.slug}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="container" />
      </div>
  );
}

export default Default;
