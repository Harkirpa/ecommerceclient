import React from 'react'
import HometheatrePage from '../../Singlepages/HometheatrePage'

function Hometheatre() {
  const category="electronics"
  const subcat="hometheatre"
  return (
   <>
     <HometheatrePage value={category} subcat={subcat}/>
   </>
  )
}

export default Hometheatre