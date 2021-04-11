import styled from 'styled-components'
import {Link} from 'react-scroll';
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const InfoContainer = styled.div`
color: #fff;

background: ${({lightbg})=> (lightbg ? '#f9f9f9' : '#01191c')}
;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
 display: grid;
z-index: 1;
height: 600px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 768px) {
height:500px;
}
`

export const InfoRow = styled.div`
 display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1` : `'col1 col2` )};

 @media screen and (max-width: 768px) {
     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col 1 col1' 'col2 col2'`)}
 }

`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;


@media screen and (max-width: 480px) {
    margin-left:25px;
}
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`

margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#05786c' : '#033e40')};

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width:440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 555px;
margin-left:-600px;
height: 100%;




`

export const Img = styled.img`
width: 610px;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (max-width: 480px) {
    width: 630px;
}
`


export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#ed9200' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) =>(fontBig ? '20px' : '16px')};
outline: none;
border:none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;`