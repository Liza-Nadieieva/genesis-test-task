import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Planet = (props) => {
  const [planet, setPlanet] = useState({})

  useEffect(async () => {
    try{
      const response = await axios(`https://swapi.dev/api/planets/${props.match.params.id}/`);
      setPlanet(response.data);
    } catch (e) {
      if (e.response.status == 404) {
        setPlanet(null);
      } else {
        // TODO: Handle if needed
      }
    }
  }, []);

  return(
    <div>
      {planet == null
        ? <h1>Planet not found</h1>
        : <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{planet.name}</td>
              </tr>
              <tr>
                <td>Period:</td>
                <td>{planet.period}</td>
              </tr>
              <tr>
                <td>Climate:</td>
                <td>{planet.climate}</td>
              </tr>
              <tr>
                <td>Gravity:</td>
                <td>{planet.gravity}</td>
              </tr>
              <tr>
                <td>Terrain:</td>
                <td>{planet.terrain}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{planet.population}</td>
              </tr>
              <tr>
                <td>Residents:</td>
                <td>{planet.residents}</td>
              </tr>
            </tbody>
          </table>
      }
    </div>
  )
}
