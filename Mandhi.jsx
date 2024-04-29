import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function ImgMediaCard() {
  const [mandhiData, setMandhiData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewmandhi');
        setMandhiData(response.data);
      } catch (error) {
        console.error('Error fetching mandhi data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (mandhi) => {
    setCart([...cart, mandhi]);
  };

  return (
    <>
      <br /><br/><br/><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <br /><br/><br/>
        {mandhiData.map((mandhi) => (
          <Card key={mandhi._id} sx={{ maxWidth: 345, marginBottom: '20px', flex: '1 0 30%' }}>
            <CardMedia
              component="img"
              alt={mandhi.title}
              height="140"
              image={mandhi.imageUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {mandhi.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mandhi.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => addToCart(mandhi)}>Add</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
