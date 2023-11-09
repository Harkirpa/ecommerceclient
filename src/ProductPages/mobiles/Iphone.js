import React from 'react'
import IphonePage from '../../Singlepages/IphonePage'

function Iphone() {
  const category="mobiles"
  const subcat="iphone"
  return (
 <>
   <IphonePage value={category} subcat={subcat}/>
 </>
  )
}

export default Iphone