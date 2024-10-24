import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';
import Header from './Components/Header';
import AppRoutes from './Routes/AppRoutes';




function App() {


  return (
    <>
    
       <Header /> {/*// means it appears on every page in the app */}
      <AppRoutes /> {/*// the routing will now be made available from every page with useNavigate hook */}
 

    </>
  );
}

  




export default App;