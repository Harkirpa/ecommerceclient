import React from 'react'
import TitanPage from '../../Singlepages/TitanPage'

function Titan() {
  const category="watches"
  const subcat="fastrack"
  return (
   <>  <TitanPage value={category} subcat={subcat}/>
   
   </>
  )
}

export default Titan