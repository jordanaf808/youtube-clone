import styled from 'styled-components/macro';

import Card from './Card.styled';
import Avatar from '@material-ui/core/Avatar';

const VideoCardStyled = styled(Card)``;

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <VideoCardStyled className='videoCard'>
      <Card.ImgContainer>
        <Card.Image src={image} alt={title} className='videoCard__thumbnail' />
      </Card.ImgContainer>
      <Card.Info className='videoCard__info'>
        <Avatar
          className='videoCard__Avatar'
          alt={channel}
          src='./images/brytny-com-C4rXIFSzEXk-unsplash.jpg'></Avatar>
        <Card.InfoText className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </Card.InfoText>
      </Card.Info>
    </VideoCardStyled>
  );
};

export default VideoCard;
