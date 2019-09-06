import React from 'react';

function AddKegForm() {
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
          min="0.00"
          step="0.01"
          max = "100.00"
          placeholder='price' /><br></br><br></br>
        <input
          type='text'
          id='abv'
          min="0.00"
          step="0.01"
          max = "100.00"
          placeholder='Alcohol By Volume %' /><br></br><br></br>

        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

export default AddKegForm;