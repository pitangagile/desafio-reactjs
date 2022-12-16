import Image from '../../assets/image/stawars.png';
import * as S from './Styles';
const StarWarsCard = (props: { title: string; year: string; director: string; }): JSX.Element => {
  return (
    <S.CardMUI >
      <S.TypographyMUI variant="subtitle1" gutterBottom >
        {props.title} <br />
        {props.year}
      </S.TypographyMUI>
      <S.CardMediaMUI
        image={Image} />
      <S.TypoFooterMUI gutterBottom variant="body2" >
        Diretor: {props.director}
      </S.TypoFooterMUI>
    </S.CardMUI>

  );
}
export default StarWarsCard