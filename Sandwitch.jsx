// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';

// export default function ImgMediaCard() {
//   const [SandwitchData, setsandwitchData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/viewsandwith');
//         SandwitchData(response.data);
//       } catch (error) {
//         console.error('Error fetching sandwitch data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <><br /><br/><br/><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//       <br /><br/><br/>
//       {sandwitchData.map((pizza) => (
//         <Card key={sandwitch._id} sx={{ maxWidth: 345, marginBottom: '20px', flex: '1 0 30%' }}>
//           <CardMedia
//             component="img"
//             alt={sandwitch.title}
//             height="140"
//             image={sandwitch.imageUrl} />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {sandwitch.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {sandwitch.description}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       ))}
//     </div></>
//   );
// }
