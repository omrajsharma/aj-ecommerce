import React from 'react'
import './Offers.css'

function Offers() {
  return (
    <div className='offers-container'>
        <div className='footerwear-offer'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Footwear_Shoes-372-232._SY232_CB607259282_.jpg'/>
        </div>
        <div className='wearable-offer'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Watches-372-232._SY232_CB607259282_.jpg' />
        </div>
        <div className='fashion-offer'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Clothing-372-232._SY232_CB607259282_.jpg' />
        </div>
    </div>
  )
}

export default Offers