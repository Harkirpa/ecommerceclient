import React from 'react'
import SingleProdPag from '../../Components/SingleProdPag'
function Nonfiction() {
   
    const category="books"
    const subcat="Nonfiction"
  return (
   <>
     <SingleProdPag value={category} subcat={subcat}/>
   </>
  )
}

export default Nonfiction