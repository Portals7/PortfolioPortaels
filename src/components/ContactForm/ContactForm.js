import React, { useState } from "react";
import { Button } from "react-scroll";
import ImageZoom from "react-medium-image-zoom";
import photo1 from '../../images/foto1.jpg';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {FormContainer, FormWrapper,FormCard,BlankSpace, Button2, FormCard2,ContactTitle,SocialIconLink, } from './FormElements';
import "./styles.css";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
      <FormContainer>
          <FormWrapper>
          <FormCard2>
            <FormCard>
            <ImageZoom
                            image={{
                                src:
                                    photo1,
                                alt: "first concept character",
                                className: "img-nzoom"
                            }}
                            zoomImage={{
                                src:
                                    photo1,
                                className: "img--zoomed"
                            }}
                        />
                </FormCard>
            <FormCard>
              <ContactTitle>Joty Portaels</ContactTitle>
             
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />
      </div>
      <BlankSpace />
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" required />
      </div>
      <BlankSpace />
      <div>
        <label htmlFor="message">Message: </label>
        <textarea id="message" required />
      </div>
      <BlankSpace />
      <Button2 type="submit">{status}</Button2>
    </form>
    </FormCard>  
    </FormCard2>
    </FormWrapper>
    </FormContainer>
  );
};

export default ContactForm;