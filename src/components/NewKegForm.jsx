import React from 'react';

function NewKegForm() {
  return (
    <div>
      <br></br>
      <form>
        <input
          type='text'
          id='brand'
          placeholder='Brand' /><br></br><br></br>
        <input
          type='text'
          id='name'
          placeholder='Name' /><br></br><br></br>
        <input
          type='text'
          id='category'
          placeholder='category' /><br></br><br></br>
        <input
          type='number'
          id='price'
          placeholder='price' /><br></br><br></br>
        <input
          type='number'
          id='abv'
          placeholder='Alcohol By Volume %' /><br></br><br></br>

        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKegForm;