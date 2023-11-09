import React from 'react'

import HpLaptop from '../../Singlepages/HpLaptop'


function Hp() {
  const category="laptop"
  const subcat="Hp"
  return (
   <>
     <HpLaptop value={category} subcat={subcat}/>
   </>
  )
}

export default Hp