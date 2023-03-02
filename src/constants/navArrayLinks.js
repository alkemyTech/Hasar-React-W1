import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";

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

export default navArrayLinks;