import React from 'react'
import BluetoothPage from '../../Singlepages/BluetoothPage'

function Bluetooth() {
  const category="electronics"
  const subcat="bluetooth"
  return (
  <>
  <BluetoothPage value={category} subcat={subcat}/>
  </>
  )
}

export default Bluetooth