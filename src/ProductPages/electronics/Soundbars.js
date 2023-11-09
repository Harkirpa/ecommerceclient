import React from 'react'
import SoundbarsPage from '../../Singlepages/SoundbarsPage'

function Soundbars() {
  const category="electronics"
  const subcat="soundbars"
  return (
   <>
   <SoundbarsPage value={category} subcat={subcat}/>
   </>
  )
}

export default Soundbars