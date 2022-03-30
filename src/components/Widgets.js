import React from 'react';
import './Widgets.css';
import {MdError, MdFiberManualRecord} from 'react-icons/md';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets_article">
                <div className="widgets_article-Left">
                    <MdFiberManualRecord/>
                </div>
                <div className="widgets_article-Right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>Linkedin News</h2>
            <MdError />
        </div>
        {newsArticle('Gopgap React is back', 'Top news - 9999 reades')}
        {newsArticle('Something news...', 'Thai land is Poon Poon!!')}
        {newsArticle('Fake news is here!', 'Thailand is number 1 of Education')}
    </div>
  )
}

export default Widgets