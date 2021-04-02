import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Graphic design</ServicesH2>
                    <ServicesP>  Design is thinking made visual; I use Photoshop and Illustrator to make ideas come to live. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    
                    <ServicesH2>Front-end development</ServicesH2>
                    <ServicesP> A Western cultural tradition (extending at least from Homer to Rilke)
                         associates the production of poetry with inspiration
                    </ServicesP>
                    <ServicesIcon src={Icon2}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Marketing</ServicesH2>
                    <ServicesP> A Western cultural tradition (extending at least from Homer to Rilke)
                         associates the production of poetry with inspiration
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
