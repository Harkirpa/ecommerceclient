import React from 'react'
import SamsungPage from '../../Singlepages/SamsungPage'

function Samsung() {
  const category="Mobile"
  const subcat="samsung"
  return (
 <>
    <SamsungPage value={category} subcat={subcat}/>
 </>
  )
}

export default Samsung