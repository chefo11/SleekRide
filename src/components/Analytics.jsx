import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from "./ReusableStyles";

function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>$7087.5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Earnings</h5>
          <h2>$550.20</h2>
        </div>
        <div className="logo">
          <IoStatsChart />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>New Client</h5>
          <h2>345</h2>
        </div>
        <div className="logo">
          <BiGroup />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Activity</h5>
          <h2>$605.30</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  .analytic {
    ${cardStyle};
    padding: 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1em;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: #000;
      svg {
        color: #fff;
      }
    }
    .logo {
      background-color: #000;
      border-radius: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em;
      svg {
        font-size: 2em;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
export default Analytics;
