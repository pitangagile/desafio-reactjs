import { Button, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Key } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import { formatarDataBrasil } from '../../compornent/utils/FormataData';
export const FilmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const title = data[5]
  const describe = data[0]
  const director = data[4]
  const create = formatarDataBrasil(data[3])
  const epsode = data[2]
  const producers = data[1]

  return (
    <div style={{ margin: 5 }}>
      <Button style={{ marginBottom: 10 }} variant="contained" onClick={() => navigate(-1)}>Voltar</Button>
      <Card sx={{ maxWidth: 900 }}>
        <CardContent>
          <Typography sx={{ fontSize: 35 }} gutterBottom>
            <></>{title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {describe}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Dirigido por: {director}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Criado em: {create}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Epsódio: {epsode}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" component={'span'}>
            Produzido por:
            <ul>
              {
                producers.map((producer: any, index: Key | null | undefined) => <li key={index}> {producer} </li>)
              }
            </ul>


          </Typography>

        </CardContent>
      </Card>
    </div>
  )
};
