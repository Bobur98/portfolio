import styled from 'styled-components';
export const Container = styled.div`
  font-size: 14px;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
  @media (max-width: 1000px){
    max-width: 90%;
    width: 100%;
    margin: 12rem auto 0 auto;

    }

  .vertical-timeline{
    margin-top: 5rem;
  }
  .vertical-timeline::before {
    background: var(--color-green);
    width: 2.5px;
  }
  
  }
  .vertical-timeline-element-icon {
    @media only screen and (max-width: 1170px) {
      margin-left: 12.55px !important;
    }
  }
  .vertical-timeline-element-content {
    background: none;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 2em 5em !important;
  }

  .vertical-timeline-element-title {
    color: var(--color-green);
    margin-bottom: 2.5rem;
  }

  #description {
    margin: 0;
    font-size: 18px;
    color: #e4e4e4;
    font-weight: lighter;
    @media (max-width: 600px){
   font-size: 12px
    }
   
  
`;
