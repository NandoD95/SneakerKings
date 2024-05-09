import NewSneakerForm from "./NewSneakerForm"; 
import Header from "./Header";
import App from "./App"; 
import ErrorPage from "./ErrorPage"; 
import SneakerDetail from "./SneakerDetail";

const routes =[ 
  // all linkable routes on the page added with an error 
    { 
      path: "/", 
      element: <App />,
      children: [ 
        { 
            path: "/",
            element:<Header />,
            errorElement: <ErrorPage />
        },
        { 
            path: "/NewSneakerForm",
            element: <NewSneakerForm />, 
            errorElement: <ErrorPage />
          } ,
          {
            path: "/SneakerDetail/:id",
            element: <SneakerDetail />,
            errorElement: <ErrorPage />
          }
      ]
    }
    
   
]; 

export default routes; 