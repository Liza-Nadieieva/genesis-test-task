import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Planets.module.css';


export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(async () => {
    const response = await axios(`https://swapi.dev/api/planets/`);
    setPlanets(response.data.results);
  }, []);

  return(
    <div className={classes.wrapper}>
      {planets.map(planet => (
        <Link to={`/planets/${planet.url.match(/planets\/(\d+)/)[1]}`}>
          <div key={planet.name} className={classes.planet_card}>
            <span>Name: {planet.name}</span><br />
            <span>Population: {planet.population}</span><br />
            <span>Climate: {planet.climate}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}