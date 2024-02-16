import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
       
          <Route path="/" exact element={<Dashboard/>} />

          <Route path="/product" exact element={<Dashboard/>} />
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
          <Route path="/saveproduct/" element={<AddOrUpdateProduct />} />

          <Route path="/cart" exact element={<CartDetail/>} />

      </Routes>
    </Container>
  );
}

export default App;
