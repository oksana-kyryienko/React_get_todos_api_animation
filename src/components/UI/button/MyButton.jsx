import React from 'react';
import s from './MyButton.module.css';

const MyBytton = ({ children, ...props}) => {
  return (
    <button {...props} className={s.myBtn}>
      {children}

    </button>
  )
}

export default MyBytton;