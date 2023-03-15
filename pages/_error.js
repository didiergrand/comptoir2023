const ErrorPage = ({ statusCode }) => {
    return (
      <div>
        {statusCode === 404 ? (
          <div>Page not found</div>
        ) : (
          <div>Server error</div>
        )}
      </div>
    );
  };
  
  ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  
    return { statusCode };
  };
  
  export default ErrorPage;
  