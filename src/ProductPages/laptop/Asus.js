import React from 'react'
import AsusPage from '../../Singlepages/AsusPage'

function Asus() {
  const category="Laptop"
  const subcat="ASUS"
  return (
   <>
     <AsusPage value={category} subcat={subcat}/>
   </>
  )
}

export default Asus