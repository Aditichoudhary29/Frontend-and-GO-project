// CardComponent.tsx
import React from "react";
import {
  CardComponentStyled,
  CardUpper,
  CardUppermore,
  FullDiv,
  Leftpart,
  LeftTextpart,
  Styledimage,
  Upperpart,
  UpperText,
  Outerleftpartdiv,
  LeftBottomText,
  Rightpart,
  Imagediv,
  RightTextpart,
  RightBottomText,
  CardMiddle,
  LeftMost,
  CardMiddleLeft,
  MarginBetween,
  Rightmost,
  Styledrepayment,
  CardMiddleRight,
  StyledLower,
  StyledButton,
  StyledSliderDiv,
  SliderDiv,
  SliderStyled,
  SliderStyled1,
  SlideStyled2,
  DiscountDIv,
  LowestOuterDiv,
} from "../Dashboard.styles";
import { useNavigate } from "react-router-dom";
import { Slider } from "6pp";
import { Typography } from "@mui/material";

interface CardProps {
  _id: string;
  BuyerName: string;
  SellerName: string;
  UnitPrice: number;
  TotalUnits: number;
  Tenure: number;
  RemainingUnits: number;
  Xirr: number;
  Repayment: string;
  ImageBuyer: string;
  ImageSeller: string;
}

const CardComponent: React.FC<{
  _id: string;
  BuyerName: string;
  SellerName: string;
  UnitPrice: number;
  TotalUnits: number;
  Tenure: number;
  RemainingUnits: number;
  Xirr: number;
  Repayment: string;
  ImageBuyer: string;
  ImageSeller: string;
  onClick :() => void;
}> =({_id,
  BuyerName,
  SellerName,
  UnitPrice,
  TotalUnits,
  Tenure,
  RemainingUnits,
  Xirr,
  Repayment,
  ImageBuyer,
  ImageSeller,onClick}) => {
  const nav = useNavigate();
  function onclickhandler() {
    nav(`/productdetails/${_id}`);
  }
  console.log(ImageBuyer)
  return (
    <CardComponentStyled onClick={onclickhandler}>
      <CardUpper></CardUpper>
        {/* <CardUppermore> */}
        <UpperText>
          {/* <Typography sx={{
            fontSize:'10px',
            paddingRight:'4rem',
            color:'black',


          }}>INVOICE DISCOUNTING</Typography> */}
          INVOICE DISCOUNTING
          </UpperText>
        <FullDiv>
          <Upperpart>
            <Leftpart>
              <Styledimage src={ImageBuyer} />
              <Outerleftpartdiv>
                <LeftTextpart>Buyer</LeftTextpart>
                <LeftBottomText>{BuyerName}</LeftBottomText>
              </Outerleftpartdiv>
            </Leftpart>
            <Rightpart>
              <Imagediv>
                <Styledimage src={ImageSeller} />
              </Imagediv>
              <Outerleftpartdiv>
                <RightTextpart>Seller</RightTextpart>
                <RightBottomText>{SellerName}</RightBottomText>
              </Outerleftpartdiv>
            </Rightpart>
          </Upperpart>
          <CardMiddle>
            <CardMiddleLeft>
              <LeftMost>
                <LeftTextpart>Unit Cost</LeftTextpart>
                <LeftBottomText>₹ {UnitPrice}</LeftBottomText>
              </LeftMost>
              <MarginBetween></MarginBetween>
              <Rightmost>
                <LeftTextpart>Repayment/Unit</LeftTextpart>
                <Styledrepayment>₹ {Repayment}</Styledrepayment>
              </Rightmost>
            </CardMiddleLeft>
            <CardMiddleRight>
              <LeftTextpart>XIRR</LeftTextpart>
              <LeftBottomText>{Xirr}%</LeftBottomText>
            </CardMiddleRight>
          </CardMiddle>

          <StyledSliderDiv>
            <SliderDiv>
              <SliderStyled>
                <SliderStyled1></SliderStyled1>
                <SlideStyled2></SlideStyled2>
              </SliderStyled>
            </SliderDiv>
          </StyledSliderDiv>

          <StyledLower>
            <LowestOuterDiv>
              <LeftMost>
                <LeftTextpart>Units Left</LeftTextpart>
                <LeftBottomText>
                  {RemainingUnits}/{TotalUnits}
                </LeftBottomText>
              </LeftMost>
              <DiscountDIv>16.2% DISCOUNT RATE</DiscountDIv>
            </LowestOuterDiv>
            <CardMiddleRight>
              <LeftTextpart>Tenure</LeftTextpart>
              <LeftBottomText>{Tenure} Days</LeftBottomText>
            </CardMiddleRight>
          </StyledLower>
        </FullDiv>

        {/* </CardUppermore>   */}
      
    </CardComponentStyled>
  );
};

export default CardComponent;
