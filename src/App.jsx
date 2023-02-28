import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Balance from "./components/pages/Balance";
import CargaSaldo from "./components/pages/CargaSaldo";
import EnvioDinero from "./components/pages/EnvioDinero";
import Gastos from "./components/pages/Gastos";
import Login from "./components/pages/Login";
import Movimientos from "./components/pages/Movimientos";

import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import Home from "./components/pages/Home";

const navArrayLinks = [
  {
    title: "Login",
    path: "/login",
    icon: <PersonIcon />,
  },
  {
    title: "Carga saldo",
    path: "/carga",
    icon: <CategoryIcon />,
  },
  {
    title: "Gastos",
    path: "/gastos",
    icon: <CategoryIcon />,
  },
  {
    title: "Balance",
    path: "/balance",
    icon: <CategoryIcon />,
  },
  {
    title: "Movimientos",
    path: "/movimientos",
    icon: <CategoryIcon />,
  },
  {
    title: "Envío de dinero",
    path: "/transferir",
    icon: <CategoryIcon />,
  },
];

function App() {
  return (
    <div className="App">
      <NavBar navArrayLinks={navArrayLinks} />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carga" element={<CargaSaldo />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/transferir" element={<EnvioDinero />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
