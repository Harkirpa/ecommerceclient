import React from 'react'
import SingleProdPage2 from '../../Components/SingleProdPage2'
function Literature() {
  const category="books"
  const subcat="Literature"
  return (
   <>
     <SingleProdPage2 value={category} subcat={subcat}/>
   </>
  )
}

export default Literature