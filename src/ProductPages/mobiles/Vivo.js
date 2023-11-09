import React from 'react'

import VivoPage from '../../Singlepages/VivoPage'

function Vivo() {
  const category="mobiles"
  const subcat="vivo"
  return (
  <>
     <VivoPage value={category} subcat={subcat}/>
  </>
  )
}

export default Vivo