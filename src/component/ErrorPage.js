import { useRouteError } from "react-router-dom"; 

function ErrorPage () { 
    const error = useRouteError(); 
    console.error(error) 

  return( 
    <>
      <header>
        <h1>
        Whats Going ON!? Got lost ? 
        </h1>
      </header>
      <main>
        <h2>Let's get you guys back on track on getting your dream sneakers from 👟Sneaker Kings👑</h2>
      </main>
    </>
  );
} 

export default ErrorPage;