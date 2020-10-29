import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import classes from './Planets.module.css';


export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(async () => {
    const response = await axios(
      `https://swapi.dev/api/planets/`
    );
    setPlanets(response.data.results);
  });
  return(
    <div className={classes.wrapper}>
      {planets.map(planet => (
        <div key={planet.name} className={classes.planet_card}>
          <span href={planet.url}>{planet.name}</span>
        </div>
      ))}
    </div>
  )
}