import React from 'react'
import SonataPage from '../../Singlepages/SonataPage'

function Sonata() {
  const category="watches"
  const subcat="sonata"
  return (
   <>
  <SonataPage value={category} subcat={subcat}/>
   </>
  )
}

export default Sonata