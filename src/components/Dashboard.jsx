import React from 'react'
import styled from 'styled-components';
import Analytics from './Analytics';
import Earnings from './Earnings';
import FAQ from './FAQ';
import Navbar from './Navbar';
import Profile from './Profile';
import Transfers from './Transfers';

function Dashboard() {
  return (
    <Section>
        <Navbar />
        <div className="grid">
            <div className="row_one">
                <Analytics />
                <FAQ />
            </div>
            <div className="row_two">
                <Earnings />
                <Transfers />
                <Profile />
            </div>
        </div>
    </Section>
  )
}
const Section =styled.section`
margin-left: 18vw;
padding: 2em;
height: 100%;
.grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1em;
    margin-top: 2em;
    .row_one{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 50%;
        gap: 1em;
    }
    .row_two{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 50%;
        gap: 1em;
    }
}
`;
export default Dashboard