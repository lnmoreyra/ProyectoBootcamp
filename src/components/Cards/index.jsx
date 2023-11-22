import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import './cards.css'


function Cards ({evento}) {

    
    return (
      
      
    <Card sx={{ maxWidth: 200  }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="70%"
          width={100}
          image={evento.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {evento.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {evento.description}
            {evento.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={{ pathname: `/details/${evento._id}`, state: { evento }}}>
        <Button size="small" color="primary">
          More Details...
        </Button>
        </Link>
      </CardActions>
    </Card>
    
  );
  
}

export default Cards;