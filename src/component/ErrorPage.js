import { useRouteError } from "react-router-dom"; 

function ErrorPage () { 
    const error = useRouteError(); 
    console.error(error) 

  return( 
    <>
      <header>
        Whats Going ON!? Got lost ? 
      </header>
      <main>
        <h1>Let's get you guys back on track on getting your dream sneakers from 👟Sneaker Kings👑</h1>
      </main>
    </>
  );
} 

export default ErrorPage;