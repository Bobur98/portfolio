import React, { useState } from 'react';
import {
  ContactForm,
  ContactInfo,
  Container,
  Icons,
  SocialMediaWrapper,
  Text,
  Wrapper,
} from './style';
import { ContactData } from '../../mock/contact';

// import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // const [status, setStatus] = useState("");
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  // const [state, handleSubmit] = useForm("mrgrobkp");
  const handleSubmit = () => {
    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        {ContactData.map((value, _) => (
          <ContactInfo key={value.id} className="contact--info">
            <h1 className="contact">CONTACT</h1>
            <Text>{value.text}</Text>
            <div className="icon">
              <Icons.MapIcon />
              {value.adress}
            </div>
            <div className="icon">
              <Icons.MailIcon />

              {value.email}
            </div>
            <div className="icon">
              <Icons.PhoneIcon />

              {value.phone}
            </div>
            <div className="icon">
              <Icons.ClockIcon />

              {value.time}
            </div>
          </ContactInfo>
        ))}

        <ContactForm className="contact--form">
          <form
            action="https://formspree.io/f/mrgrobkp"
            method="POST"
            id="myForm"
            // ref={myForm}
            onSubmit={handleSubmit}
          >
            <input
              className="nameBox"
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required
              value={enteredName}
              onChange={nameChangeHandler}
            />
            <input
              className="nameBox"
              type="email"
              name="user_email"
              id=""
              placeholder="Email"
              required
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}

            <textarea
              className="messageBox"
              name="message"
              id=""
              row="5"
              cols="60"
              rows="6"
              placeholder="Message"
              required
              value={enteredMessage}
              onChange={messageChangeHandler}
            ></textarea>
            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}
            <button
              className="sendBtn"
              value="send"
              type="submit"
              name="submit"
              id=""
              // disabled={state.submitting}
            >
              send
            </button>
            {/* send
            </input> */}
          </form>
          {/* <div id="status">{status}</div> */}
        </ContactForm>
      </Wrapper>
      {ContactData.map((value, index) => (
        <SocialMediaWrapper key={index}>
          <a href={value.facebook} alt="facebook">
            <Icons.FacebookIcon />
          </a>
          <a href={value.instagram} alt="instagram">
            <Icons.InstagramIcon />
          </a>
          <a href={value.linkedin} alt="linkedIn">
            <Icons.LinkedinIcon />
          </a>
        </SocialMediaWrapper>
      ))}
    </Container>
  );
};

export default Contact;
