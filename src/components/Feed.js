import React from 'react';
import {MdCreate , MdPhoto, MdArticle} from 'react-icons/md';
import {BsPlayBtnFill , BsCalendarEvent} from 'react-icons/bs';
import './Feed.css'
import InputOption from './InputOption';
import Post from './Post';
import { newFeed } from '../data';

function Feed() {

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
          <div className="feed_input">
            <MdCreate/>
            <form >
              <input type="text" placeholder='Start a post' />
              <button type='submit'>Send</button>
            </form>
          </div>
          <div className="feed_inputOptions">
            <InputOption title='Photo' Icon={ MdPhoto } color="#70b5f9"/>
            <InputOption title='Video' Icon={ BsPlayBtnFill } color="#7fc15e"/>
            <InputOption title='Event' Icon={ BsCalendarEvent } color="#e7a33e"/>
            <InputOption title='Write article' Icon={ MdArticle } color="#ff7979"/>
          </div>
        </div>
        {newFeed.map((item , index) => {
          const {name, description, message, photoUrl} = item;
          return (
            <Post 
              key={`id-${index + name}` }
              name={name}
              photoUrl={photoUrl}
              description={description}
              message={message}
            />
          )
        })}
    </div>
  )
}

export default Feed