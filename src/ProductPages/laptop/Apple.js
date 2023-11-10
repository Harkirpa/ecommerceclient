import React from 'react'
import AppleLaptop from '../../Singlepages/AppleLaptop'

function Apple() {
  const category="Laptop"
  const subcat="Apple"
  return (
   <>
     <AppleLaptop value={category} subcat={subcat}/>
   </>
  )
}

export default Apple