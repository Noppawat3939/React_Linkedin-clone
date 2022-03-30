import React from 'react'
import InputOption from './InputOption'
import {BiLike} from 'react-icons/bi';
import {FaRegCommentDots, FaShare} from 'react-icons/fa';
import {IoIosSend} from 'react-icons/io';
import './Post.css'

function Post({name, description, message, photoUrl}) {

  return (
    <div className='post'>
        <div className="post_header">
            <img src={photoUrl} alt={name} />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={BiLike} title="Like" color="gray" />
            <InputOption Icon={FaRegCommentDots} title="Comment" color="gray" />
            <InputOption Icon={FaShare} title="Share" color="gray" />
            <InputOption Icon={IoIosSend} title="Send" color="gray" />
        </div>
    </div>
  )
}

export default Post