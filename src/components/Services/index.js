import React from 'react'
import Icon1 from '../../images/pngweb6.png'
import Icon2 from '../../images/pngweb2.png'
import Icon3 from '../../images/pngweb5.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
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
                    <ServicesH2>Creative atelier</ServicesH2>
                    <ServicesP>
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
