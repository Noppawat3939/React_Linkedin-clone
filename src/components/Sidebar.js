import React from 'react';
import './Sidebar.css';

function Sidebar() {
    
    const recentItem = (topic) => {
        return (
            <div className="sidebar_recenItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    }

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1552879948-16c32e175ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="cover" />
            <img src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=CjHOkSgaH8gAX8QvVyJ&_nc_ht=scontent.fphs4-1.fna&oh=00_AT9Mia2K_zgSbwfEiLjXWSccJHbaJfwYGYehdwv9lgVvSA&oe=62672031"  />
            <h2>Noppawat Chochaipantawong</h2>
            <h4>Noppawat3984@gmail.com</h4>
        </div>
        
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who views you</p>
                <p className="sidebar_statNumber">1,010</p>
            </div>
            <div className="sidebar_stat">
                <p>Views you post</p>
                <p className="sidebar_statNumber">999</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('something')}
            {recentItem('everything')}
            {recentItem('nothing')}
            {recentItem('something')}
            {recentItem('everything')}
            {recentItem('nothing')}
        </div>
    </div>
  )
}

export default Sidebar