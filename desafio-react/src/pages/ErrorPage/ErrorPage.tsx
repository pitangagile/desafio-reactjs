
import Image from '../../assets/image/Error.png';
import * as S from './Styles';

export const ErrorPage = () => {

  return (
    <S.Container>
      <S.Content>
        <S.CardMui>
          <S.CardMediaMUI
            image={Image} />
        </S.CardMui>
      </S.Content>
    </S.Container>
  )
};
