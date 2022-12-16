import { Key } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Styles';

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
    <S.Container>
      <S.Content>
        <div>
          <S.ButtonMui variant="contained" onClick={() => navigate(-1)}>Voltar</S.ButtonMui>
        </div>
        <S.CardMui>
          <S.CardContentMui>
            <S.TypographTitleMui gutterBottom>
              {title}
            </S.TypographTitleMui>
            <S.TypographyMui color="text.secondary">
              {describe}
            </S.TypographyMui>
            <S.TypographyMui color="text.secondary">
              <S.BoldStyled>Dirigido por:</S.BoldStyled> {director}
            </S.TypographyMui>
            <S.TypographyMui color="text.secondary">
              <S.BoldStyled>Criado em: </S.BoldStyled> {create}
            </S.TypographyMui>
            <S.TypographyMui color="text.secondary">
              <S.BoldStyled> Epsódio:</S.BoldStyled> {epsode}
            </S.TypographyMui>
            <S.SpanStyled color="text.secondary">
              <S.BoldStyled>Produzido por:</S.BoldStyled>
              <ul>
                {
                  producers.flatMap((producer: any, index: Key | null | undefined) => <li key={index}> {producer} </li>)
                }
              </ul>
            </S.SpanStyled>
          </S.CardContentMui>
        </S.CardMui>
      </S.Content>
    </S.Container>
  )
};
