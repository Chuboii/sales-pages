import Image from 'next/image'
import { ImageBox } from './PaymentCards.style'


const PaymentCards = () => {
  return (
      <ImageBox>
      <Image  quality={100} src='/images__6_-removebg-preview.png' alt='' fill/>    
      </ImageBox>
  )
}

export default PaymentCards