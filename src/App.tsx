import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// components
import Header from './components/Header';
import InfoCard, { Card } from './components/InfoCard';

// global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    /* background: hsl(0, 0%, 75%); */
    padding: 0 7%;
  }

  * {
    box-sizing: border-box;
    /* margin: 0;
    padding: 0; */
  }
`

const MainContainer = styled.main`
  .hero-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-image: url('./assets/images/illustration-working.png');
    margin-bottom: 100px;

    h1 {
      font-size: 56px;
      font-weight: bolder;
      color: hsl(260, 8%, 14%);
      width: 50%;
      margin-bottom: 2px;
      min-width: 512px;
    }

    p {
      font-size: 18px;
      font-weight: 600;
      color: hsl(257, 7%, 63%);
      width:45%;
      margin-top: 2px;
      min-width: 461px;
    }

    .button-container {
      button {
        color: #FFF;
        background: hsl(180, 66%, 49%);
        border-radius: 18px;
        padding: 10px 20px;
        border: none;
        font-size: 14px;
      }
    }
  }

  .form-container {
    width: 90%;
    margin: 0 auto;
    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 35px;
      background: hsl(257, 27%, 26%);
      border-radius: 5px;

      input[type="text"] {
        /* width: 80%; */
        flex: 1;
        border: none;
        border-radius: 4px;
        padding: 12px;
        font-size: 15px;
      }
      
      input[type="submit"] {
        margin-left: 10px;
        color: #FFF;
        background: hsl(180, 66%, 49%);
        border-radius: 5px;
        padding: 10px 20px;
        border: none;
        font-size: 14px;
      }
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    h2 {
      font-weight: bolder;
      font-size: 28px;
      margin-bottom: 0;
    }

    p {
      font-weight: 700;
      font-size: 16px;
      color: hsl(257, 7%, 63%);
      margin-top: 5px;
      text-align: center;
      width: 50%;
    }

    .card-container {
      display: flex;
      align-items: center;
      margin-top: 50px;
    }
  }
`;

// mocked data
const cards: Card[] = [
  {
    title: 'Brand recognition',
    text: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links helps instil confidence in your content'
  },
  {
    title: 'Detailed Records',
    text: 'Gain insights into who is click your links. Knowing when and where people engage with your content helps with decisions'
  },
  {
    title: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement'
  }
]


const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Header />

      <MainContainer>
        <div className="hero-section">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="button-container">
            <button>Get started</button>
          </div>
        </div>

        <div className="form-container">
          <form>
            <input type="text" name="url" id="url" placeholder="Shorten your link here" />
            <input type="submit" value="Shorten it!" />
          </form>
        </div>
      
        <div className="list-container"></div>

        <div className="info-container">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our Advanced
            statistics dashboard
          </p>

          <div className="card-container">
            {
              cards.map(card => (<InfoCard card={card}/>))
            }
          </div>
        </div>
      </MainContainer>
    </div>
    </>
  );
}

export default App;
