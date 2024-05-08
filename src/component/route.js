import NewSneakerForm from "./NewSneakerForm"; 
import Header from "./Header";
import App from "./App"; 
import ErrorPage from "./ErrorPage"; 
import SneakerCard from "./SneakerCard";
import SneakerDetail from "./SneakerDetail";

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
          },
          {
            path: "/SneakerDetail/:id",
            element: <SneakerDetail />,
            errorElement: <ErrorPage />
          }
      ]
    }
    
   
]; 

export default routes; 