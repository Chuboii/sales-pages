'use client'
import styled from "styled-components";


export const Container = styled.section`
 margin-right: 1.5rem;

 @media screen and (max-width:768px){
    display:flex;
  overflow-x: auto;
  white-space: nowrap;
  margin:0;

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
   flex: 0 0 auto;
  margin-right: 10px; 
  }

`
