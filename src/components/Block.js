import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Block.css'

const Block = ({ title, content, thumbnail, links }) => {
  let blockClass = 'block';

  if (thumbnail) {
    blockClass += ' block--has-thumbnail';
  }

  function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  return (
    <div className={blockClass}>
      { thumbnail ? <img className="block__thumbnail" src={thumbnail.src} alt={title} /> : null }
      <h2 className="block__title">{ (typeof title == 'object') ? <span>{title.prefix} <Typewriter words={shuffleArray(title.words)} loop="1" cursor="true" cursorStyle={<span className="block__title__cursor">|</span>} /></span> : title }</h2>
      { content.map((line, index) => <p className="block__paragraph" key={index}>{line}</p>) }
      { (links.length > 0) ? <ul className="block__links">{ links.map((link, index) => <li className="block__links__link" key={index}><a href={link.href} target="_blank" rel="noreferrer"><i className={link.icon}></i> <span>{link.text}</span></a></li>) }</ul> : null }
    </div>
  );
};

export default Block;