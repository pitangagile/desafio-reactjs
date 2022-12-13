import { Card, CardMedia, Typography } from '@mui/material';
import Image from '../../assets/image/stawars.png';



export default function StarWarsCard(props: { title: string; year: string; director: string, onclick: () => void }): JSX.Element {


  return (
    <Card sx={{ margin: 2 }} onClick={() => { props.onclick() }}>
      <Typography sx={{ paddingTop: 1, paddingLeft: 1 }} variant="subtitle1" gutterBottom component="div">
        {props.title} <br />
        {props.year}
      </Typography>

      <CardMedia component="img"
        height="140"
        width='160'
        sx={{ backgroundColor: 'black' }}
        image={Image} />
      <Typography gutterBottom variant="body2" component="div" sx={{ paddingTop: 1, paddingLeft: 1 }}>
        Diretor: {props.director}
      </Typography>
    </Card >

  );
}