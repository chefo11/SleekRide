import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";
const data = [
  { data: 4500 },
  { data: 5000 },
  { data: 6700 },
  { data: 4700 },
  { data: 4500 },
  { data: 4400 },
  { data: 4800 },
  { data: 5300 },
  { data: 5880 },
  { data: 6000 },
  { data: 6300 },
  { data: 5100 },
  { data: 5800 },
  { data: 6090 },
  { data: 5300 },
];
function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h4>This month earnings</h4>
          <h1>$678.6</h1>
          <div className="growth">
            <span>3.6%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20em;
  ${cardStyle};
  padding: 2em 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3em;
      h1 {
        font-size: 2em;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5em;
        border-radius: 1em;
        transition: 0.3s ease-in-out;
        &: hover {
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
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
`;
export default Earnings;
