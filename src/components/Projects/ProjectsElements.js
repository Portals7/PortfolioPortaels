import styled from 'styled-components';

export const ProjectsContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #87c9b4;


@media screen and (max-width: 768px) {
    
}

@media screen and (max-width: 480px) {
    margin-top: -200px;
   
    
    }
    `




export const ProjectsWrapper = styled.div`
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
    margin-top:0px;

}

@media screen and (max-width: 480px) {
height:1800px;
    
    }`

export const ProjectsCard = styled.div`
background: #fff;
display: flex;
flex-direction; column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;

max-width: 400px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 480px) {
margin-top: 20px;

}
`

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

export const ProjectsIcon2 = styled.img`
height: 300px;
margin-left: 20px;
max-width: 300px;
display: flex;
margin-bottom: 10px;
@media screen and (max-width: 480px) {
    max-width: 200px;
    max-height: 200px;
    margin-left: 30px;
    
    
    }
    

`

export const ProjectsIcon3 = styled.img`
height: 300px;

max-width: 300px;
display: flex;
margin-bottom: 10px;
@media screen and (max-width: 480px) {
    max-width: 200px;
    max-height: 200px;
    margin-left: 15px;
    
    }
    



`

export const ProjectsH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 50px;


@media screen and (max-width: 480px) {
    font-size: 2rem;
    
}
`

export const ProjectsH2 = styled.h2`
font-size:1rem;
margin-bottom: 10px;
`
export const ProjectsP = styled.p`
font-size:1rem;
text-align: left;
`

export const Form = styled.form`
display: grid; 
grid-template-columns: 1fr 1fr; 
grid-gap: 20px; 
`
export const LazyContainer = styled.div`
height: 1300px;
width:900px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #87c9b4;
margin-bottom:50px;




@media screen and (max-width: 768px) {
    height: 1300px;
    margin-top: 0px;
}

@media screen and (max-width: 480px) {
    height: 20px;
    margin-top: 300px;
    width:400px;

}
`

export const SliderH1 = styled.h1`
margin-top:30px;
font-size: 2.5rem;
color: #fff;


@media screen and (max-width: 480px) {
    font-size: 2rem;
    
}
`


export const PhotoH1 = styled.h1`
margin-top:150px;
font-size: 2.5rem;
color: #fff;
margin-bottom: 30px;


@media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top:1200px;
}`

export const BlankSpace = styled.div`
height:200px;
color: green;

@media screen and (max-width: 480px) {
    height:20px;
}`



export const CreatingsContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #87c9b4;


@media screen and (max-width: 768px) {
    
}

@media screen and (max-width: 480px) {
   
   
    
    }
    `