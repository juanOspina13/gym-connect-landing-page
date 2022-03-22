/* import logo from './assets/logo.png'*/
import styled from 'styled-components';
import './App.css'
import Main from './Main';
import '../styles/tailwindstyles.css';

const WelcomeMessageComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color:#cee741;
`;


function App() {
  return (
    <Main></Main>
  )
}

export default App
