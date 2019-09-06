import React from 'react';
import Ticket from './Keg';

function TicketList(){
  return (
    <Ticket
      brand="Guiness"
      name="Black Lager"
      category="Stout"
      price = "6.50"
      abv = "4.5"
      />
  );
}

export default TicketList;