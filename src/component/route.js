import NewSneakerForm from "./NewSneakerForm"; 
import Header from "./Header";
import App from "./App"; 
import ErrorPage from "./ErrorPage"; 
import SneakerCard from "./SneakerCard";

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
          } ,
          { 
            path:"/SneakerCard", 
            element: <SneakerCard /> , 
            errorElement: <ErrorPage />

          }
      ]
    }
    
   
]; 

export default routes; 