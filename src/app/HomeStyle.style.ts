'use client'

import styled from "styled-components"

export const Wrapper = styled.div`
  width: 60%;
  padding: 1rem;

  @media screen and (max-width:768px){
  width:100%;
  margin-bottom:2rem;
  }
`
export const Wrap = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,.3);
  padding-bottom:3rem;

  @media screen and (max-width:768px){
  border:none;
  }
`