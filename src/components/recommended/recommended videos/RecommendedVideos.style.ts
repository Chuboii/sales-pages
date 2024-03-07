'use client'

import styled from "styled-components"

export const Container = styled.section`
 display: flex;
 padding-top: 2rem;

 @media screen and (max-width:768px){
    margin-bottom: -1rem;
  }
`

export const Icon = styled.i`
 position:absolute;
 right:1rem;
 bottom:.5rem;
 background: #29B9A8;
 color:white;
 padding:.7rem;
 border-radius:50%;
`

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width:768px){
    flex-direction:column;
    margin:0 .5rem;
    width:100%;
  }
`

export const Description = styled.p`
  max-width: 120px;
  width:100%;
  margin-left: 1rem;

  @media screen and (max-width:768px){
  font-size:13px;
  margin:.5rem 0;
  max-width:150px;
  }
`

export const ImageBox = styled.div`
 position: relative;
 width:140px;

 height: 100px;

 @media screen and (max-width:768px){
    width:100%;
  }
`
