import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const Card2 = () => {
  return (
    <Card
      sx={{
        mt:5,
        transition: "0.2s",
        "&:hover":{
          transform:"scale(1.05)",
        },
      }}
    >
      <CardActionArea>
      <CardMedia
        component="img"
        image= "https://via.placeholder.com/150"
        height="200"
        alt="una descripcion"
      />
      </CardActionArea>


      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography
          component="p"
          variant="body2"
        > Lorem asdfasdfadsfadsfasdfadsfasdfas
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button variant="contained">Remove</Button>
      </CardActions>
    </Card>

  )
}

export default Card2