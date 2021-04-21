import styled from 'styled-components/macro';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* margin-bottom: 40px; */
  padding: 0.5rem;
  cursor: pointer;
  /* Cool 3D Card Effect */
  /* transform: rotate3d(0.85, -0.866, 0, 10deg) rotate(1deg);
  box-shadow: 1em 1em 6em -3em rgb(0 0 0 / 50%),
    0.5em 1em 2em -2em rgb(0 0 0 / 50%);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border-radius: 0.5em;

  &:hover,
  &:focus {
    transform: rotate3d(0, 0, 0, 0deg) rotate(0deg);
  } */
`;

const CardImgContainer = styled.div`
  height: 140px;
  width: 100%;
  margin: 0 auto;
  /* padding: 0.25rem 0; */
  overflow: hidden;
  /* add position: and padding-top: to enable 16/9 */
  position: relative;
  padding-top: 56.25%;
`;

const CardImage = styled.img`
  /* height: 100%; */
  width: 100%;
  /* aspect-ratio: 16/9; not supported entirely */
  /* add position: and top: instead */
  position: absolute;
  top: 0;
  object-fit: cover;
  /* fix out of ratio image */
  transform: translateY(-30%);
  text-align: center;
`;

const CardInfo = styled.div`
  display: flex;
  /* place-items: center; */
  /* align-items: center; */
  justify-content: flex-start;
  line-height: 1.25rem;
  margin: 0.8rem 0;

  & > * {
    margin-right: 1rem;
  }

  h4 {
    color: var(--text);
    font-size: 0.95rem;
  }

  p {
    color: var(--button);
    opacity: 0.9;
    font-size: 0.9rem;

    &:hover {
      opacity: 1;
    }
  }
`;

const CardInfoText = styled.div``;

Card.Info = CardInfo;
Card.InfoText = CardInfoText;
Card.ImgContainer = CardImgContainer;
Card.Image = CardImage;

export default Card;
