import styled, { keyframes } from 'styled-components';
import { ReactComponent as map } from '../../assets/icons/map.svg';
import { ReactComponent as mail } from '../../assets/icons/mail.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as clock } from '../../assets/icons/clock.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as linkedin } from '../../assets/icons/linkedin.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-resume-container-blue);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 1px #333;
  max-width: 50%;
  width: 100%;

  @media (max-width: 1400px) {
    margin: 0 auto;
    max-width: 60%;
    width: 100%;
  }

  @media (max-width: 1200px) {
    margin: 0 auto;
    max-width: 80%;
    width: 100%;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    width: 100%;
    max-width: 90%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    margin: 4rem;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    margin: 3rem;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }
`;
export const ContactInfo = styled.div`
  color: var(--color-white);
  font-size: 14px;
  line-height: 2;
  align-items: center;
  justify-content: center;
  .contact {
    text-align: center;
  }
  @media (max-width: 820px) {
    margin-bottom: 1.5rem;
  }
`;

export const Text = styled.p`
  margin: 1rem 3rem 2rem 0;
  @media (max-width: 414px) {
    margin: 1rem 0;
  }
`;

export const Icons = styled.div``;

Icons.MapIcon = styled(map)`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  & path {
    fill: var(--color-white);
  }
`;
Icons.MailIcon = styled(mail)`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  & path {
    fill: var(--color-white);
  }
`;
Icons.PhoneIcon = styled(phone)`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  & path {
    fill: var(--color-white);
  }
`;
Icons.ClockIcon = styled(clock)`
  width: 12px;
  height: 12px;
  margin-right: 15px;
  & path {
    fill: var(--color-white);
  }
`;
Icons.FacebookIcon = styled(facebook)`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  cursor: pointer;

  & path {
    fill: var(--color-white);
  }
  &:active {
    transform: scale(0.85);
  }
`;
Icons.InstagramIcon = styled(instagram)`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
  & path {
    fill: var(--color-white);
  }
  &:active {
    transform: scale(0.85);
  }
`;
Icons.LinkedinIcon = styled(linkedin)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  & path {
    fill: var(--color-white);
  }
  &:active {
    transform: scale(0.85);
  }
`;

const status = keyframes`
0%{
  opacity: 1;
  pointer-events: all;
}
90%{
  opacity: 1;
  pointer-events: all;
}
100%{
  opacity: 0;
  pointer-events: none;
}
`;
export const ContactForm = styled.div`
  text-align: center;
  .nameBox {
    border: none;
    height: 30px;
    width: 100%;
    padding: 7px;
    font-size: 15px;
    border-radius: 2px;
    letter-spacing: 2px;
    margin: 0 0 15px 0;
    opacity: 0.9;
    box-shadow: none;
  }
  .messageBox {
    border: none;
    width: 100%;
    padding: 12px;
    font-size: 15px;
    resize: vertical;
    box-shadow: 0 1px 1 px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    border-radius: 2px;
  }
  .sendBtn {
    width: 100%;
    height: 35px;
    margin: 30px 0 10px 0;
    border: none;
    border-radius: 2px;
    font-size: 15px;
    text-transform: uppercase;
    color: var(--color-white);
    background-color: var(--color-green);
    box-shadow: 0 0 10px 1px #333;
    cursor: pointer;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: #252b45;
    }
    &:active {
      transform: scale(0.95);
    }
  }

  /* #status {
    text-align: center;
    width: 100%;
    padding: 3px;
    border-radius: 2px;
    margin: 0 auto;
  }

  #status.success {
    background-color: rgb(211, 250, 133);
    animation: ${status} 4s ease forwards;
  }
  #status.error {
    background-color: rgb(250, 129, 92);
    color: var(--color-white);
    animation: ${status} 4s ease forwards;
  }*/
`;

export const SocialMediaWrapper = styled.div`
  margin-bottom: 1rem;
`;
