import Image from 'next/image'
import {ImageBox} from './ProductImage.style'


const imageStyles = {
  borderRadius:"10px"
}

const ProductImage = () => {
  return (
      <ImageBox>
          <Image style={imageStyles} quality={100} src="/buy-teeth-whitening-kits-online.avif" alt='' fill/>
    </ImageBox>
  )
}

export default ProductImage