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

   animation: ${props => props.typeForm === "select" ? "slide-left 2s ease Forwards" : ""} ;

  @keyframes slide-left {
    0%{
      transform: translateX(0px);
    }
    100%{
      transform: translateX(-3000px);
  
    }
  }
`;
