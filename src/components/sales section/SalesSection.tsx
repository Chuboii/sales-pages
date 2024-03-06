import SalesTags from '../sales tags/SalesTags'
import { Container, Title, Span,P } from './SalesSection.style'


const SalesSection = () => {
  return (
      <Container>
          <Title>Bundle and Save</Title>
     <P>Split your payments up with <Span>Shop Pay</Span></P>
    <SalesTags/>
      </Container>
  )
}

export default SalesSection