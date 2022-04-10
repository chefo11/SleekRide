import React from "react";
import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";
import image from "../assests/image.jpeg";

function Transfers() {
  const transactions = [
    {
      image: image,
      name: "Chefo",
      time: "Today, 15:53",
      amount: "+$600",
    },
    {
      image: image,
      name: "Chefo",
      time: "Today, 15:53",
      amount: "-$80",
    },
    {
      image: image,
      name: "Chefo",
      time: "Today, 15:53",
      amount: "+$520",
    },
    {
      image: image,
      name: "Chefo",
      time: "Today, 15:53",
      amount: "-$610",
    },
    {
      image: image,
      name: "Chefo",
      time: "Today, 15:53",
      amount: "-$610",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transfers">
        {transactions.map((transaction, index) => {
          return (
            <div className="transaction" key={index}>
              <div className="transactionTitle">
                <div className="transactionTitleImage">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transactionTitleDetails">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transactionAmount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#" className="view">
        View all <HiArrowRight />
      </a>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  gap: 1em;
  .title {
    h2 {
      color: #ffc107;
      letter-spacing: 0.2em;
      font-family: "Permanent Marker", cursive;
    }
  }
  .transfers {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    gap: 1em;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .transactionTitle {
        display: flex;
        gap: 1em;
        .transactionTitleImage {
          img {
            height: 2.5em;
            border-radius: 3em;
          }
        }
      }
      .transactionAmount {
        background-color: #d7e41e1d;
        padding: 0.2em 0.5em;
        width: 4em;
        text-align: center;
        border-radius: 1em;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: #000;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1em;
    gap: 1em;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4em;
    }
    &:hover {
      transform: translateX(0.5em);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .transfers {
      .transaction {
        flex-direction: column;
        aligh-items: center;
        gap: 1em;
      }
    }
  }
`;
export default Transfers;
