import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Projects from '../components/Projects/';
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm/ContactForm'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import Footer from '../components/Footer';

const Home = () => {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
     setIsOpen(!isOpen)
 };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Services />
        <Projects />
      
        
        
        <Contact />
        <ContactForm />
        <Footer />
        </>
    );
};

export default Home
