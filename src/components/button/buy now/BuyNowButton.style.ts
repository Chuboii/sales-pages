'use client'

import styled, {keyframes} from "styled-components"


const zoomInOut = keyframes`
   0%{
      transform:scale(1);
   }
   50%{
      transform: scale(.7);
   }
   100%{
      transform: scale(1);
   }
`

type ButtonType = {
   infinite: string;
}
export const Button = styled.button<ButtonType>`
   background: #29B9A8;
   color: white;
   padding: .7rem;
   border-radius: 25px;
   font-size: 20px;
   width: 100%;
   margin-top: 1rem;
   animation: ${ zoomInOut } ${({infinite}) => infinite} 1s ease-in-out;
`