import { Container } from "react-bootstrap"
// import CreationCompte from "./pages/CreationCompte";
// import Signup from "./pages/Signup";
// import SignIn from "./pages/SignIn";
// import { Register } from "./pages/Register"
import "../src/pages/style.css"
// import Signup from "./pages/Signup";
import Header from "./pages/Header";

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}>
        {/* <div className="header">
          Créez votre compte
        </div> */}
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Header/>
        </div>
        
      </Container>
      
  );
}

export default App;
