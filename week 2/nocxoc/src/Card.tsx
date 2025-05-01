import React from 'react';
import './App.css';

interface CardProps {
  imageName: string; 
  category: string; 
  title: string; 
  progress: number; 
}

const Card: React.FC<CardProps> = ({ imageName, category, title, progress }) => {
  return (
    <div className='card'>
      <div className='contents'>
        <div className='box'></div>
        <img src={imageName} alt={`${category} Logo`} />
        <div className='text'>
          <p className='category'>{category}</p>
          <p className='title'>{title}</p>
        </div>
      </div>
      <div className='divider'></div>
      <div
        className='progress-container'
        style={{ '--progress-width': `${progress}%` } as React.CSSProperties}
      >
        <div className='progress-bar'></div>
        <p className='progress-text'>{progress}%</p>
      </div>
    </div>
  );
};

export default Card;