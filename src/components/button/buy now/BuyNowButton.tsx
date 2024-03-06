'use client'
import { useEffect, useState } from 'react'
import { Button } from './BuyNowButton.style'

const BuyNowButton = () => {
 const [isInfinite, setIsInfinite] = useState(false)
  const [count, setCount] = useState(0)
  
  
  useEffect(() => {

    let interval: NodeJS.Timeout;

   interval = setInterval(() => {
     setCount(c => c + 1)
    }, 1000)


    if (count <= 7) {
      if (count > 3) {
        setIsInfinite(true)
      }
    }
    else {
      setIsInfinite(false)
      setCount(0)
    }

    return () => clearInterval(interval)
  
  }, [isInfinite, count])

  
  return (
    <Button infinite={isInfinite ? "infinite" : "linear"}>Buy Now</Button>
  )
}

export default BuyNowButton