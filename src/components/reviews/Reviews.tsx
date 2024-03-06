import Stars from '../stars/Stars'
import { Container, Wrap } from './Reviews.style'
import ReviewCount from './review count/ReviewCount'
import ReviewRatio from './review ratio/ReviewRatio'

const Reviews = () => {
  return (
      <Container>
          <Wrap>
              <Stars />
              <ReviewRatio/>
          </Wrap>
          
          <ReviewCount/>
    </Container>
  )
}

export default Reviews