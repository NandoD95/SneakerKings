import NewSneakerForm from "./NewSneakerForm"; 
import Header from "./Header";
import App from "./App"; 

const routes =[ 
    { 
      path: "/", 
      element: <App />,
      children: [ 
        { 
            path: "/",
            element:<Header />
        },
        { 
            path: "/NewSneakerForm",
            element: <NewSneakerForm />
          } 
      ]
    }
    
   
]; 

export default routes; 