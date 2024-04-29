import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ImgMediaCard = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewp');
        setPizzaData(response.data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <>
      <br /><br/><br/><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <br /><br/><br/>
        {pizzaData.map((pizza) => (
          <Card key={pizza._id} sx={{ maxWidth: 345, marginBottom: '20px', flex: '1 0 30%' }}>
            <CardMedia
              component="img"
              alt={pizza.title}
              height="140"
              image={pizza.imageUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pizza.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pizza.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => addToCart(pizza)}>Add to Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <br /><br />
      <Typography variant="h5" align="center">Cart</Typography>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ImgMediaCard;
