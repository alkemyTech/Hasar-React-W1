import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const CargaSaldo = () => {
  return (
    <>
      <Typography variant="h3" mt={1}>
        CARGAR SALDO
      </Typography>
      <Card
        sx={{
          mt: 5,
          // transition: "0.2s",
          // "&:hover":{
          //   transform:"scale(1.05)",
          // },
        }}
      >
        <CardContent>
          <Typography variant="h5">Ingresar dinero</Typography>
          <Typography component="p" variant="body2">
            {" "}
            Cargara dinero en su Wallet
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Cargar</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CargaSaldo;
