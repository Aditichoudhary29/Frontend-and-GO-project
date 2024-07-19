import styled from "styled-components"
import { Link } from 'react-router-dom';
import cardimage from "../../assets/pngs/cardimage.png"

export const CardOuterDiv=styled('div')`
   
    padding-top:56px;
    color: rgb(12, 12, 12);
    line-height: 1.4;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
    font-family: Inter, sans-serif;
    font-weight: 400;
   ;
     display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.69rem 2rem;
}
`
export const CardInnerDiv=styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.69rem 2rem;
    line-height: 1.4;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
}

`
export const CardComponentStyled=styled('div')`
box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 8px 0px;
    border-radius: 1rem;
    position: relative;
    background: white;
    width: 20.5rem;
    height: 16.0625rem;
    cursor: pointer;
}
`
export const CardUpper=styled('div')`
    border-radius: 1rem 6.25rem 0rem 0rem;
    z-index: 1;
    position: relative;
    width: 20.5rem;
    height: 7.125rem;
    background: url(${cardimage});
}
` 
export const CardUppermore=styled('div')`
  border-radius: 1rem;
    width: 20.5rem;
    height: 6.25rem;
    position: absolute;
    top: 0px;
    background: rgb(246, 237, 255);
`

export const UpperText=styled('div')`
margin: 0px;
    font-size: 0.6875rem;
    line-height: 2.5;
    font-weight: 500;
    padding-left:50px;
    color:rgb(176, 135, 243);
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    background: rgb(246, 237, 255);
    border-radius: 1rem;


}

`
export const FullDiv=styled('div')`
border-radius: 1rem;
    background: rgb(255, 255, 255);
    z-index: 1;
    position: absolute;
    top: 1.56rem;
    width: 20.5rem;
    height: 14.5025rem;
    padding: 0.75rem 1rem 1rem;
}

`
export const  Upperpart=styled('div')`
display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    height: 3rem;
}

`
 export const Leftpart=styled('div')`
 display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
    width: 50%;
}
 
 `           
 export const Styledimage=styled.img`
 width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
   

 
 `
 export const Outerleftpartdiv=styled.div`
 width:84px;
 height:56px;
 
 `
 export const LeftTextpart=styled.div`
 margin: 0px;
    font-size: 0.75rem;
    line-height: 1.4;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgb(157, 157, 157);
}
 `
 export const LeftBottomText=styled.div`
 margin: 0px;
    font-size: 0.875rem;
    line-height: 1.4;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
 `

 export const Rightpart=styled.div`
 display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row-reverse;
    width: 50%;
}
 
 `
 export const Imagediv=styled.div`
 background: rgb(236, 236, 236);
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
 `
 export const RightTextpart=styled.div`
     margin: 0px;
    font-size: 0.75rem;
    line-height: 1.4;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgb(157, 157, 157);
    text-align: right;
}
}
 `
 export const RightBottomText=styled.div`
 margin: 0px;
    font-size: 0.875rem;
    line-height: 1.4;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: right;
 `
export const CardMiddle=styled.div`

    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
`
export const CardMiddleLeft=styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 1rem;
}
`

export const LeftMost=styled.div`
     display:grid;


`
export const MarginBetween=styled.div`
    width: 0.0625rem;
    height: 1.6875rem;
    background: rgb(230, 230, 230);
}
`
export const Rightmost=styled.div`
  display:grid;
`
export const Styledrepayment=styled.div`
 margin: 0px;
    font-size: 0.875rem;
    line-height: 1.4;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color:green;

`
export const CardMiddleRight=styled.div`
display:grid;
`
export const StyledLower=styled.div`
margin-top: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
`

export const StyledButton =styled('button')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 12px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    line-height: 1;
    font-family: Inter, sans-serif;
    min-width: 64px;
    padding: 8px 22px;
    border-radius: 8px;
    width: 100%;
    
    text-align: center;
    font-size: 1.125rem;
    height: 2.4rem;
    color: rgb(176, 135, 243);
    background-color: rgb(246, 237, 255) ;
    font-weight: 600;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover{
       background-color: rgb(176, 135, 243);
       color:rgb(246, 237, 255) ;
      
    }

`
export const StyledSliderDiv=styled.div`
    margin-top: 1.25rem;
    cursor: pointer;
`
export const SliderDiv=styled.div`
width: 100%;
    position: relative;
    margin: 0px;

`
export const SliderStyled =styled.div`
    display: flex;
    width: inherit;
    height: 12px;
    border-radius: 12px;
    color:gray;
`
export const SliderStyled1=styled.div`
    height: 6px;
    border-radius: 10px;
    position: absolute;
    z-index: 0;
    left: 0px;
    top: 3px;
        width: 100%;
    background: rgb(230, 230, 230);
}

    &:hover {
        cursor: pointer;
}
    }
}

`
export const SlideStyled2=styled.div`
height: 12px;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
    left: 0px;
        width: 16%;
    background: rgb(7, 211, 252);
}
`
export const DiscountDIv=styled.div`
    border: 1px solid rgba(240, 67, 147, 0.25);
    border-radius: 4px;
    width: fit-content;
    height: 1.5rem;
    font-size: 0.625rem;
    font-weight: 500;
    padding: 4px 10px;
    text-transform: uppercase;
    background: rgb(255, 237, 245);
    color: rgb(240, 67, 147);
}
`
export const LowestOuterDiv=styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
`