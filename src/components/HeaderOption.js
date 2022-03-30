import React from 'react';
import "./HeaderOption.css";

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <img src={avatar} className="headerOption_icon" style={{borderRadius:'50%'}}/>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption