import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import image from "../assests/profile.jpeg";

function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Chefo</h2>
        <h5>
          <HiOutlineLocationMarker />
          Lagos, Nigeria
        </h5>
      </div>
      <div className="info">
        <div className="info_container">
          <h5>Days at work</h5>
          <h3>16</h3>
        </div>
        <div className="info_container">
          <h5>Rides</h5>
          <h3>678</h3>
        </div>
        <div className="info_container">
          <h5>Hours</h5>
          <h3>716</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  .image {
    max-height: 10em;
    overflow: hidden;
    border-radius: 20em;
    img {
      height: 10em;
      width: 10em;
      object-fit: cover;
      border-radius: 50%;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      letter-spacing: 0.3em;
      font-family: "Permanent Marker", cursive;
    }
    h5 {
      letter-spacing: 0.2em;
    }
  }
  .info {
    display: flex;
    gap: 1em;
    .info_container {
      text-align: center;
    }
  }
`;
export default Profile;
