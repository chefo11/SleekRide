import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {MdSpaceDashboard} from 'react-icons/md';
import {FaAddressCard, FaTaxi} from 'react-icons/fa';
import {RiDashboard2Fill} from 'react-icons/ri';
import {GiTwirlCenter} from 'react-icons/gi';
import {BsFillChatTextFill} from 'react-icons/bs';
import {IoSettings} from 'react-icons/io5';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiLogOut} from 'react-icons/fi';
import {VscChromeClose} from 'react-icons/vsc';

function Sidebar() {
    const [currentLink,setCurrentLink]= useState(1)
  return (
    <>
        <Section>
            <div className='top'>
                <div className="brand">
                    <FaTaxi /><span>Sleek Ride</span>
                </div>
                <div className="toggle"></div>
                <div className="links">
                    <ul> 
                        <li onClick={()=>setCurrentLink (1)} className={currentLink ===1? "active" : ""}><a href="#"><MdSpaceDashboard /><span> Dashboard</span></a></li>
                        <li onClick={()=>setCurrentLink (2)} className={currentLink ===2? "active" : ""}><a href="#"><RiDashboard2Fill /><span> Riders</span></a></li>
                        <li onClick={()=>setCurrentLink (3)} className={currentLink ===3? "active" : ""}><a href="#"><FaAddressCard /><span> Payment Details</span></a></li>
                        <li onClick={()=>setCurrentLink (4)} className={currentLink ===4? "active" : ""}><a href="#"><GiTwirlCenter /><span> Learning Center</span></a></li>
                        <li onClick={()=>setCurrentLink (5)} className={currentLink ===5? "active" : ""}><a href="#"><BsFillChatTextFill /><span> FAQ</span></a></li>
                        <li onClick={()=>setCurrentLink (6)} className={currentLink ===6? "active" : ""}><a href="#"><IoSettings /><span> Settings</span></a></li>
                    </ul>
                </div>
            </div>
            <div className='logout'>
                <a href="#"> <FiLogOut /><span className='logout'> Logout</span></a>
            </div>
        </Section>
    </>
  );
}
const Section =styled.section`
position: fixed;
left: 0;
background-color: #212121;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2em 0;
gap: 2em;

.logout {
    padding: 0.3em 1em;
    border-radius: 0.6rem;
    &:hover{
        background-color: red; 
    }
    a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: white;
    }
}
.top{
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
    .toggle{
        display:none;
    }
    .brand{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;
        svg{
            color: #ffc107;
            font-size: 2em;
        }
        span{
            font-size: 2em;
            color: #ffc107;
            font-family: 'Permanent Marker', cursive;
        }
    }
    .links{
        display: flex;
        justify-content: center;
        ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1em;
        li{
            padding: 0.6em 1em;
            border-radius: 0.6em;
            &:hover{
                background-color: #ffc107;
                a{
                    color: black;
                    
                }
            }
            a{
                text-decoration: none;
                display: flex;
                gap: 1em;
                color: white;
            }
        }
       .active{
           background-color: #ffc107;
           a{
               color: black;
           }
       }
    }
}

`;
export default Sidebar