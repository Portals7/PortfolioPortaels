import styled from 'styled-components';

import {Link} from 'react-scroll';

export const FormContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #87c9b4;


@media screen and (max-width: 768px) {
   
    
}
@media screen and (max-width: 480px) {
    height: 700px;
    
   
   

}

`

export const FormWrapper = styled.div`
max-width: 1500px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
padding: 0 50px;
background-color:#87c9b4;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    


   
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    

}


}`

export const FormCard = styled.div`
background: #fff;
display: flex;
flex-direction; column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height:400px;
max-width: 400px;
padding: 20px;

box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;



@media screen and (max-width: 480px) {
margin-top: 20px;


}
`

export const FormCard2 = styled.div`
background: #fff;
display: flex;
flex-direction; column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height:500px;
width: 800px;
margin-left:200px;
margin-bottom:50px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;



@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 480px) {
margin-top: 20px;
grid-template-columns: 1fr;
padding: 0 20px;
display: flex;
flex-direction: column;
margin-left:-200px;


}
`

export const BlankSpace = styled.div`
background-color:#fff;
height:20px;
`



export const Button2 = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#87c9b4' : '#87c9b4')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#87c9b4' : '#fff')};
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

export const ProjectsIcon = styled.img`
height: 300px;
max-width: 300px;
display: flex;
margin-bottom: 10px;

@media screen and (max-width: 480px) {
    max-width: 200px;
    max-height: 200px;
    margin-left: 10px;
    
    }
    
`
export const ContactTitle = styled.div`
background-color:#fff;
height:350px;
`

export const SocialIconLink =styled.a`
color:#fff;
font-size: 24px;
`
