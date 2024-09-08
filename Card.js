import React,{useState} from 'react';
import Nav from './Nav';
const Card = ({search,navigate }) => {
  const [currentPage, setCurrentPage] = useState('Card');
  const [selectedItemId, setSelectedItemId] = useState('');
  const handle = (page, itemId) => {
    setCurrentPage(page);
    setSelectedItemId(itemId);
  }; 
  const navigate2 = (pages) => {
    setCurrentPage(pages);
  }
  return (
    <div>
      {currentPage === 'Card' && (
        <>
          <button className='btn btn-secondary' onClick={() => navigate('home')} style={{"margin-top":"1%","margin-left":"90%"}}>GO BACK</button>
          <div className='container'>
            <div className='row'>
              {search.map((item, index) => (
                <div className='col-md-4' key={index}>
                  <div className='card'>
                    <div className='card-body'>
                      <img src={item.strMealThumb} alt={item.strMeal} className='card-img-top' />
                      <h1>{item.strArea}</h1>
                    </div>
                    <div className='card-title'>
                      <h1 className='btn btn-dark'>{item.strMeal}</h1><br />
                      <button className='btn btn-danger' onClick={() => handle('Nav', item.idMeal)}>Check Ingredients</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {currentPage === 'Nav' && <Nav itemId={selectedItemId} navigate2={navigate2} />} {/* Make sure the prop name matches here */}
    </div>
  );
};
export default Card;
