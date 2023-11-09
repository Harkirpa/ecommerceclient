import React from 'react'
import WatchesPage from '../../Singlepages/WatchesPage'

function Fastrack() {
  const category="watches"
  const subcat="fastrack"
  return (
   <>
    <WatchesPage value={category} subcat={subcat}/>
   </>
  )
}

export default Fastrack