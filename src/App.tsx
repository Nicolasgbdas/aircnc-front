import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function App() {
   return (
       <>
       <header>
         <h1>Header</h1>
         <nav>
            <Link to="/">Home</Link>  
         </nav>
       </header>
       <main>
          <Outlet></Outlet>
       </main>
       <footer>
          <h2>Footer</h2>
       </footer>
       </>
   );
}

export default App;