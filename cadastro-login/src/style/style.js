import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle `

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

`;

const Main = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #373F47;
`;


const Container = styled.div `
    width: 500px;
    height: 500px;
    background-color:#D7D9CE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
`;

const Title = styled.div`
    
    width: 100%;
    heigth: 15%;
    background-color: #D7D9CE;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1{
        color: #040404;
        font-size: 3em;
    }
`
const Form = styled.form `
    width: 100%;
    height: 70%;
    background-color: #D7D9CE;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input `
    width: 60%;
    height: 35px;
    font-size: 1.5em;
    border-radius: 10px;
    border: none;
    padding-left: 10px;

    ::placeholder{
        font-size: 0.8em;
    }
`

const Button = styled.button `

    padding: 20px 50px;
    border: unset;
    border-radius: 15px;
    color: #040404;
    z-index: 1;
    background: #e8e8e8;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms;
    overflow: hidden;
    cursor: pointer;
    font-size: 1em;

   ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #040404;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms
   }
   
   :hover {
    color: #e8e8e8;
   }
   
   :hover::before {
    width: 100%;
   }

`

export {
    GlobalStyle,
    Main,
    Container,
    Title,
    Form,
    Input,
    Button
}
