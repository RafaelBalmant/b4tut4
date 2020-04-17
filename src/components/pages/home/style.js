import styled from 'styled-components';



export const DivHome = styled.div`
  background-color:   #69779b;
  height: 100%!important;
  width: 100%!important;
  .input-cep {
    width: 30%;
  }
  
  
  .card {
    background-color: white;
    padding: 10px;
    box-shadow: #282c34;
  }
  
  .label-cep {
    margin-top: 90px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    align-self: start;
    color: white;
    font-size: 23px;
  }
`;


export const BodyForm = styled.div`
   animation: ${props => props.animation ? "slide-left 0.6s alternate" : ""} ;
   animation-iteration-count: 2;

  @keyframes slide-left {
    0%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-150px);
    }
    100%{
      transform: translateY(-200px);
    }
  }
`;

