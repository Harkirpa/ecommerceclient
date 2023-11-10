import React from 'react'

import HpLaptop from '../../Singlepages/HpLaptop'
function Hp() {
  const category="Laptop"
  const subcat="HP"
  return (
   <>
     <HpLaptop value={category} subcat={subcat}/>
   </>
  )
}

export default Hp