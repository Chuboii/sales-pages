'use client'

import styled from "styled-components"

export const Container = styled.section`
 width:50%;
 padding:0 3rem;

 @media screen and (max-width:768px){
    width:100%;
    padding: 0 1rem;
  } 
`

export const Text = styled.h1`
  font-weight: 500;
  font-size: 20px;
`

export const Wrap = styled.div`
 display:flex;
 align-items: center;
 margin-top: 1rem;
 justify-content:space-between;
`