import React from 'react';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.header__title}>Test Task</h2>
      <div className={classes.logo_wrapper}>
        <div className={classes.logo_star}/>
        <h2 className={classes.header__title}>Genesis</h2>
      </div>
      <div className={classes.star_1}/>
      <div className={classes.star_2}/>
      <div className={classes.star_3}/>
    </div>
  )
}