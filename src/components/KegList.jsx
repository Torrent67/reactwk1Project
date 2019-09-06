import React from 'react';
import Keg from './Keg';

function KegList(){
  return (
    <Keg
      brand="Guiness"
      name="Black Lager"
      category="Stout"
      price = "6.50"
      abv = "4.5"
      />
  );
}

export default KegList;