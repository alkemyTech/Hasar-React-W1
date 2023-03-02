import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Balance from "./pages/Balance";
import CargaSaldo from "./pages/CargaSaldo";
import EnvioDinero from "./pages/EnvioDinero";
import Gastos from "./pages/Gastos";
import Login from "./pages/Login";
import Movimientos from "./pages/Movimientos";

import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import Home from "./pages/Home";

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
          <Route path="*" element={<h1>No existe la página</h1>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
