/* import logo from './assets/logo.png'*/ 
import styled from 'styled-components';
import './App.css'

const WelcomeMessageComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color:#cee741;
`;


function App() {
  return (
    <div className="App">
      <header></header>
      <div className="App-main">
        <WelcomeMessageComponent>Pagina Gym Connect</WelcomeMessageComponent>
      </div>
    </div>
  )
}

export default App
