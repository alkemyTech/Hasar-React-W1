import { Route, Routes } from "react-router-dom";
import Balance from "../pages/Balance";
import CargaSaldo from "../pages/CargaSaldo";
import EnvioDinero from "../pages/EnvioDinero";
import Gastos from "../pages/Gastos";
import Login from "../pages/Login";
import Movimientos from "../pages/Movimientos";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carga" element={<CargaSaldo />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/transferir" element={<EnvioDinero />} />
          <Route path="*" element={<h1>No existe la página</h1>}/>
    </Routes>
  )
}

export default Router