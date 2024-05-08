import NewSneakerForm from "./NewSneakerForm"; 
import Header from "./Header";
import App from "./App"; 
import ErrorPage from "./ErrorPage";

const routes =[ 
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
          } 
      ]
    }
    
   
]; 

export default routes; 