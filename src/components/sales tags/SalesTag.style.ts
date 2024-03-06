'use client'

import styled from "styled-components"

type WrapperType = {
  border: string;
}
type CheckBoxType = {
  bg: string;
}

export const Container = styled.section`

`
export const Wrapper = styled.label<WrapperType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
background-color: #F5F5F5;
margin:1rem 0;
padding:2rem 1.5rem;
cursor:pointer;
  border-radius: 25px;
  border: 2.5px solid ${({border}) => border};
`
export const Checkbox = styled.div<CheckBoxType>`
  width:30px;
  height:30px;
  background: ${({ bg }) => bg};;
  border-radius: 5px;
`

export const ImageBox = styled.div`
  width: 70px;
    height: 70px;
    position: relative;
    margin-left: 1rem;
`
export const Text = styled.p`
  margin-left: 1rem;
`
export const Discount = styled.div`
   background-color: #F9D3FC;
 padding:.3rem 1rem;
 font-size: 13px;
 border-radius: 8px;
`
export const DiscountPrice = styled.p`
  text-decoration: line-through;
  margin:.5rem 0;
  font-size: 13px; 
  color: gray;
`
export const Price = styled.p`
 margin:.3rem 0;
` 
export const Wrap = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: flex-end;
`
export const SaveMore = styled.div`
 color:#29B9A8;
 font-weight: 700;
 font-size: 14px;
 text-transform: uppercase;
`
export const BestValue = styled.div`
 padding:.5rem 1rem;
 border-radius: 8px;
 font-size: 12px;
 color:white;
 background: black;
 font-weight: 600;
 text-transform: uppercase;
`
export const BestSeller = styled.div`
 padding:.5rem 1rem;
 font-weight: 600;
 text-transform: uppercase;
 border-radius: 8px;
 font-size: 12px;
 color:white;

 background-color: #29B9A8;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
`

