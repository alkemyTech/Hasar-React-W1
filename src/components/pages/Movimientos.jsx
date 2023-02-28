import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WalletIcon from "@mui/icons-material/Wallet";

const Movimientos = () => {
  return (
    <>
      <Typography variant="h3" mt={1}>
        TRANSACCIONES
      </Typography>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography>Ultimos movimientos</Typography>
          <Typography>Saldo ingresado: $2300</Typography>
          <Typography>Saldo extraido: $1990</Typography>
          <Button
            sx={{ mr: 2, mt: 2 }}
            startIcon={<WalletIcon />}
            variant="contained"
          >
            Comprar
          </Button>
          <Button sx={{ mt: 2 }} startIcon={<WalletIcon />} variant="contained">
            Vender
          </Button>
        </Box>
        <Box sx={{ mr: 2 }}>Saldo total: $55000</Box>
      </Paper>
    </>
  );
};

export default Movimientos;
