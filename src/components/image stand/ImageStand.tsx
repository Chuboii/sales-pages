import { Container, ImageBox} from './ImageStand.style'
import Image from 'next/image'

const imageStyle = {
    borderRadius:"10px"
}
const ImageStand = () => {
  return (
      <Container>
          <ImageBox>
              <Image style={imageStyle} src="/teeth-whitening-kits-recommended-by-dr-greg-grillo.webp" alt="" fill/>
          </ImageBox>

          <ImageBox>
              <Image style={imageStyle} src="/buy-teeth-whitening-kits-online.avif" alt="" fill/>
          </ImageBox>

          <ImageBox>
              <Image style={imageStyle} src="/buy-teeth-whitening-kit.avif" alt="" fill/>
          </ImageBox>

          <ImageBox>
              <Image style={imageStyle} src="/buy-teeth-whitening-kits.avif" alt="" fill/>
          </ImageBox>
    </Container>
  )
}

export default ImageStand