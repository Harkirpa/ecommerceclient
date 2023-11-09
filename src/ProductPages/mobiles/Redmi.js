import React from 'react'
import RedmiPage from '../../Singlepages/RedmiPage'

function Redmi() {
  const category="mobiles"
  const subcat="redmi"
  return (
  <>
     <RedmiPage value={category} subcat={subcat}/>
  </>
  )
}

export default Redmi