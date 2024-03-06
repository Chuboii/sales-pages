'use client'
import styled from "styled-components";


export const Container = styled.section`
 margin-right: 1.5rem;

 @media screen and (max-width:768px){
    display:flex;
  }
`
export const ImageBox = styled.div`
  position:relative;
  width:110px;
  height: 100px;
  margin-bottom: 1rem;
  @media screen and (max-width:768px){
   width:250px;
   height:250px;
   margin:0 1rem;
  }

`
