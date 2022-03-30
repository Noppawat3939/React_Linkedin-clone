import React from 'react';
import './Header.css';
import {BsSearch} from 'react-icons/bs';
import {IoHomeSharp} from 'react-icons/io5';
import {FaUserFriends} from 'react-icons/fa';
import {MdBusinessCenter , MdNotifications} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';
import {BsGrid3X3GapFill} from 'react-icons/bs';
import Logo from '../image/logo.png'
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src={Logo} />
            <div className="header_search">
                <BsSearch />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={IoHomeSharp} title='Home' />
            <HeaderOption Icon={FaUserFriends} title='My Network' />
            <HeaderOption Icon={MdBusinessCenter} title='Jobs' />
            <HeaderOption Icon={RiMessage2Fill} title='Messaging' />
            <HeaderOption Icon={MdNotifications} title='Notifications' />
            <HeaderOption avatar='https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=CjHOkSgaH8gAX8QvVyJ&_nc_ht=scontent.fphs4-1.fna&oh=00_AT9Mia2K_zgSbwfEiLjXWSccJHbaJfwYGYehdwv9lgVvSA&oe=62672031' title='Me'/>
            <HeaderOption Icon={ BsGrid3X3GapFill } title='Work' />
        </div>
    </div>
  )
}

export default Header