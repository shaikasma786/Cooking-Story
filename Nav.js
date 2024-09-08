import React, { useState, useEffect } from 'react';
import "./Nav.css";
const Nav = ({ itemId,navigate2 }) => {
  const [dataitem, setDataitem] = useState([]);
  const fetchdata = (itemId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDataitem(data.meals || []);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    if (itemId) {
      fetchdata(itemId);
    }
  }, [itemId]);
  const speechhandle=(text)=>{
    let speech=new SpeechSynthesisUtterance();
    speech.text=text;
    window.speechSynthesis.speak(speech);
  }
  const stophandle=()=>{
    window.speechSynthesis.cancel();
  }
  return (
    <div className='top'>
        <button className='btn btn-secondary' onClick={() => navigate2('Card')}id="bt1">Go To Card</button>
      {dataitem.map((item, index) => (
        <>
        <h1 key={index}>{item.strMeal}</h1>
        <div className='img'>
            <img src={item.strMealThumb} alt={item.strMeal} style={{"width":"400px","height":"400px","border-radius":"25px"}}/>
            {item.strYoutube && (
            <div className="youtube-video">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.strYoutube.split('=')[1]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <h2>Below is the Recipe instructions</h2>
        <div className='item-description'>
            <div className='item-desc'>
            <p>{item.strInstructions}</p>
            </div>
            <button className='btn btn-primary' onClick={()=>speechhandle(item.strInstructions)}>Listen Now</button>&nbsp;
            &nbsp;
            <button className='btn btn-dark' onClick={stophandle}>Stop Now</button>
        </div>
        </>
      ))}
    </div>
  );
}

export default Nav;
