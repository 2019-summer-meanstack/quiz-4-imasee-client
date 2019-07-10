import React, { useState } from 'react';

import axios from 'axios';

const Vedios = () => {

    const ini = [
        {
            "title": "iphone 6s",
            "author": "Apple",
            "url": "https://www.youtube.com/embed/_o1ihME_yVI",
            "date": "2-3-2016"
        }
        ];
  const [ved, setVed] = useState(ini);
  
    axios
      .get('http://localhost:500/api/vedios')
      .then(response => {
        setVed(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('error ', error);
      });

  return (
    <div>
      <h1>Vedios List </h1>
      {ved.map(v => {
        return (
          <div>
            <h2><a href={v.url}>{v.title}</a></h2>
            <p>Published: {v.date} by {v.author}</p>
          </div>
        );
      })}
    </div>
  );
    };

export default Vedios;