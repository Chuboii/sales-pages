import BuyNowButton from '../button/buy now/BuyNowButton'
import Description from '../description/Description'
import PaymentCards from '../payment cards/PaymentCards'
import Quality from '../quality/Quality'
import RecommendedText from '../recommended/recommended text/RecommendedText'
import Reviews from '../reviews/Reviews'
import SalesDiscountTag from '../sales discount tag/SalesDiscountTag'
import SalesSection from '../sales section/SalesSection'
import { Container,Box, Text, Wrap} from './ProductDetails.style'

const ProductDetails = () => {
  return (
      <>
          <Container>
              <Wrap>
                  <Text>TEETH WHITENING KIT</Text>
            <SalesDiscountTag/>
        </Wrap>
        <Box>
          <Reviews />
          <RecommendedText />
          </Box>
              <Description />
              <Quality/>
              <SalesSection/>
              <BuyNowButton />
              <PaymentCards/>
      </Container>
      </>
  )
}

export default ProductDetails