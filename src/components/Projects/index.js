import React from 'react'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
import project4 from '../../images/project8.jpg'
import project5 from '../../images/project5.png'
import project6 from '../../images/project6.png'
import project7 from '../../images/project7.jpg'
import project8 from '../../images/project4.png'
import project9 from '../../images/project9.jpg'
import project10 from '../../images/project10.jpg'
import project11 from '../../images/project11.jpg'
import project12 from '../../images/project12.jpg'
import project13 from '../../images/project13.jpg'
import project14 from '../../images/project14.jpg'
import project15 from '../../images/project15.jpg'
import project16 from '../../images/project16.jpg'
import Carousel from "../../Carousel/Carousel"
import { LazyImageProvider } from "../../LazyImage/LazyImageContext";
import LazyImage from "../../LazyImage/LazyImage";
import "./styles.css";

import ImageZoom from "react-medium-image-zoom";

import { LazyContainer, ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, SliderH1, PhotoH1, BlankSpace, CreatingsContainer, } from './ProjectsElements';

const images = [
    "/img/1.jpeg",
    "/img/2.jpeg",
    "/img/3.jpeg",
    "/img/4.jpeg",
    "/img/5.jpeg",
    "/img/6.jpeg",
    "/img/7.jpeg",
    
];




const Projects = () => {
    return (
        /*<ServicesContainer id="Projects">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                <ServicesIcon src={Icon1}/>
                    <ServicesH2>Graphic design</ServicesH2>
                    <ServicesP> 
                    </ServicesP>
               
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon2}/>
                    <ServicesH2>Front-end development</ServicesH2>
                    <ServicesP>
                    </ServicesP>
                   
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Creative atelierrrr</ServicesH2>
                    
                    <ServicesP>
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer> 
    )*/
        <>
            <ProjectsContainer id="Projects">
            <ProjectsH1>Latest design Projects</ProjectsH1>
                <ProjectsWrapper>
                
                    <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project1,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project1,
                                className: "img--zoomed"
                            }}
                        />

                    </ProjectsCard>

                    <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project2,
                                alt: "Logo design: Fonkelfoze",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project2,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>


                    <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project3,
                                alt: "Logo design: Tippers",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project3,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project4,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project4,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project5,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project5,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project6,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project6,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project7,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project7,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project8,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project8,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project9,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project9,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                    <ProjectsCard>
                    <ImageZoom
                            image={{
                                src:
                                    project10,
                                alt: "Sticker design for Christmas",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project10,
                                className: "img--zoomed"
                            }} />
                    </ProjectsCard>
                 
                 
         
                    
                </ProjectsWrapper>

           

           
            
                <PhotoH1>Photography</PhotoH1>
                <ProjectsWrapper>
                <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project11,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project11,
                                className: "img--zoomed"
                            }}
                        />

                    </ProjectsCard>
                    <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project12,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project12,
                                className: "img--zoomed"
                            }}
                        />

                    </ProjectsCard>
                    <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project13,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project13,
                                className: "img--zoomed"
                            }}
                        /> </ProjectsCard>
                           <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project14,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project14,
                                className: "img--zoomed"
                            }}
                        /> </ProjectsCard>
                           <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project15,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project15,
                                className: "img--zoomed"
                            }}
                        /> </ProjectsCard>
                         <ProjectsCard>
                        <ImageZoom
                            image={{
                                src:
                                    project16,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    project16,
                                className: "img--zoomed"
                            }}
                        /> </ProjectsCard>
                    </ProjectsWrapper>
                    </ProjectsContainer>
                    <BlankSpace />
<CreatingsContainer>
                <SliderH1>Creative Projects</SliderH1>
                <LazyContainer>
                <LazyImageProvider>
                    <Carousel>
                        {images.map((image, i) => (
                            <LazyImage aspectRatio={[5, 6]} src={image} key={i} />
                        ))}
                    </Carousel>
                </LazyImageProvider>
            </LazyContainer>
            </CreatingsContainer>
            
           
        </>
    )
}



export default Projects
