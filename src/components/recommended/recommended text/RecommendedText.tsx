import Image from 'next/image'
import { Container, ImageBox, Text, Span} from './RecommendedText.style'

const imageStyle = {
  borderRadius:'50%'
}

const RecommendedText = () => {
  return (
      <Container>
          <ImageBox>
          <Image style={imageStyle} src="/greg-grillo-small.webp" alt="" fill/>
          </ImageBox>
              <Text> 
              Recommended By <Span>Dr. Greg Grillo</Span>
          </Text>
    </Container>
  )
}

export default RecommendedText