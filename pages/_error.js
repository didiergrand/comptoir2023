import Layout from "@component/components/layout";

const ErrorPage = ({ statusCode }) => {
    return (
      <Layout>
        {statusCode === 404 ? (
       <main
       class="flex items-center justify-center h-full"
     >
         <div class="flex flex-col items-start justify-center sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
           <p class="font-semibold text-9xl">404</p>
           <div class="">
             <h1 id="pageTitle" class="flex items-center m-0 mb-6 p-0 pb-2">
               <svg
                 aria-hidden="true"
                 class="w-6 h-6 text-yellow-500"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                 />
               </svg>
               <span class="text-xl font-medium text-yellow-500">
               Oops! Page non trouvée
               </span>
             </h1>
             <p class="text-base font-normal text-gray-600 dark:text-gray-300">
              La page que vous recherchez n'a pas été trouvée.
             </p>
           </div>
         </div>
        </main>
        ) : (
        <main
          class="flex items-center justify-center h-full"
        >
            <div class="flex flex-col items-start justify-center sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
              <div class="">
                <h1 id="pageTitle" class="flex items-center m-0 mb-6 p-0 pb-2">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span class="text-xl font-medium text-red-500">
                  Server error
                  </span>
                </h1>
                <p class="text-base font-normal text-gray-600 dark:text-gray-300">
                  Une erreur s'est produite sur le serveur.
                </p>
              </div>
            </div>
           </main>
        )}
      </Layout>
    );
  };
  
  ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  
    return { statusCode };
  };
  
  export default ErrorPage;
  