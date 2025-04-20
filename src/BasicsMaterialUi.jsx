import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function BasicsMaterialUi() {

  let handleButton = () =>{
    console.log("button was clicked");
  }

  return (
    <>
      <h1>Material Ui</h1>
      <Button variant='contained' onClick={handleButton}> Click Me! </Button>
      <Button variant='contained' onClick={handleButton} disabled> Click Me-2 </Button>
      <Button variant='contained' onClick={handleButton} color='error'> Click Me! </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  )
}

export default BasicsMaterialUi
