'use client'

import styled from "styled-components"

export const Container = styled.section`
display: flex;
align-items: center;

@media screen and (max-width:768px) {
  margin-top: 1rem;
}
`

export const Text = styled.p`
 margin-left: .5rem;
 font-size:14px;
 max-width:200px;
 @media screen and (max-width:768px) {
  max-width: 300px;
}
`

export const ImageBox = styled.div`
   position: relative;
   width: 40px;
   height: 40px;

`

export const Span = styled.span`
  color:#29B9A8;
`