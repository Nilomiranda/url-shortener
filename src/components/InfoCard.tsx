import React from 'react';
import styled from 'styled-components';

export interface Card {
  title: string;
  text: string;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 5px 20px -9px grey;
  margin: 0 20px;
  padding: 10px 30px;
  height: 260px;

  > * {
    display: flex;
  }

  .img-container {
    align-items: flex-start;

    .img-wrapper {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }

  .text-container {
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-weight: bolder;
      font-size: 20px;
      color: hsl(260, 8%, 14%);
    }

    p.card-info {
      font-weight: 700;
      font-size:16px;
      color: hsl(257, 7%, 63%);
      width: 100%;
      text-align: left;
    }
  }
`;

const InfoCard = (props: { card: Card } ) => {
  const { card : { text, title }} = props;

  return (
    <MainContainer>
      <div className="img-container">
        <div className="img-wrapper"></div>
      </div>
      <div className="text-container">
        <strong>{ title }</strong>

        <p className="card-info">{ text }</p>
      </div>
    </MainContainer>
  );
}

export default InfoCard;