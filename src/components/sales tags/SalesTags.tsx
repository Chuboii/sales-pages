'use client'
import Image from "next/image"
import { Checkbox,Box, SaveMore, BestSeller, BestValue,Wrap, Container, Discount, DiscountPrice, ImageBox, Price, Text, Wrapper } from "./SalesTag.style"
import { useCallback, useEffect, useState } from "react"


const SalesTags = () => {
    const [isFirstTagClicked, setIsFirstTagClicked] = useState(false)
    const [isSecondTagClicked, setIsSecondTagClicked] = useState(false)
    const [isThirdTagClicked, setIsThirdTagClicked] = useState(false)
    
//     useEffect(() => {
      
//         const tags = document.querySelectorAll(".clickable")
        
//         tags.forEach(tag => {
//             tag.addEventListener('click', () => {
//                 removeBg()
//                 setIsClicked(true)  
//             })
//         })

//         const removeBg = () => {
//             tags.forEach(tag => {
//                 tag.removeEventListener('click', () => {
//                   setIsClicked(false)  
//                 })
//             })
//     }
//   }, [])
  
    const enableFirstPriceTag = useCallback(() => {
        setIsFirstTagClicked(true)
        setIsSecondTagClicked(false)
        setIsThirdTagClicked(false)
    }, [])

    const enableSecondPriceTag = useCallback(() => {
        setIsFirstTagClicked(false)
        setIsSecondTagClicked(true)
        setIsThirdTagClicked(false)
    }, [])

    const enableThirdPriceTag = useCallback(() => {
        setIsFirstTagClicked(false)
        setIsSecondTagClicked(false)
        setIsThirdTagClicked(true)
    }, [])


    return (
      <Container>
          <Wrapper border={isFirstTagClicked ? "#29B9A8" : "white"} onClick={enableFirstPriceTag} className="clickable">
              <Box>
              <Checkbox bg={isFirstTagClicked ? "#29B9A8" : "white"} />
              
                <ImageBox>
                  <Image src="/buy-teeth-whitening-kits-min_7447d410-a1da-4029-b3b4-6633855d6b00_100x.avif" alt="" fill/>
              </ImageBox>
              <Text>Teeth Whitening Kit</Text>
             </Box>
                  <Wrap>
              <Discount>30% OFF</Discount>
              <DiscountPrice>$89.99</DiscountPrice>
             <Price>$62.99</Price>
          </Wrap>
          </Wrapper>

          <Wrapper border={isSecondTagClicked ? "#29B9A8" : "white"} onClick={enableSecondPriceTag}>
          <Box>
              <Checkbox bg={isSecondTagClicked ? "#29B9A8" : "white"} />
              <ImageBox>
                  <Image src="/buy-teeth-whitening-kits-min_7447d410-a1da-4029-b3b4-6633855d6b00_100x.avif" alt="" fill/>
              </ImageBox>
              <Text>Teeth Whitening Kit</Text>
             </Box>
                  <Wrap>
              <BestSeller>Best Seller</BestSeller>
                  <Price>$62.99</Price>
                  <SaveMore>Save 20%</SaveMore>
          </Wrap>
          </Wrapper>

          <Wrapper border={isThirdTagClicked ? "#29B9A8" : "white"} onClick={enableThirdPriceTag} className="clickable">
          <Box>
              <Checkbox bg={isThirdTagClicked ? "#29B9A8" : "white"} />
              <ImageBox>
                  <Image src="/buy-teeth-whitening-kits-min_7447d410-a1da-4029-b3b4-6633855d6b00_100x.avif" alt="" fill/>
              </ImageBox>
              <Text>Teeth Whitening Kit</Text>
       </Box>
                  <Wrap>
              <BestValue>Best value</BestValue>
                  <Price>$62.99</Price>
                  <SaveMore>Save 20%</SaveMore>
          </Wrap>
          </Wrapper>
    </Container>
  )
}

export default SalesTags