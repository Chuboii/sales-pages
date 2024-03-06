import Image from 'next/image'
import {Container, Icon, Wrapper, ImageBox, Description } from './RecommendedVideos.style'

const RecommendedVideos = () => {
  return (
      <Container>
          <Wrapper>
              <ImageBox>
                  <Image src='/teeth-whitening-kits-recommended-by-dr-greg-grillo.webp' alt='' fill/>
           <Icon className="fa fa-play" aria-hidden="true"></Icon>
              </ImageBox>
              <Description> Watch our product on how to use this product</Description>
          </Wrapper>

          <Wrapper>
              <ImageBox>
                  <Image src='/teeth-whitening-kits-recommended-by-dr-greg-grillo.webp' alt='' fill/>
            <Icon className="fa fa-play" aria-hidden="true"></Icon>
              </ImageBox>
              <Description>Listen to why Dr. Greg Grillo recommends this product</Description>
          </Wrapper>
    </Container>
  )
}

export default RecommendedVideos