import React from 'react'
import './Diwali.css'

const DiwaliListItems = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/413-kkJUA9L._AC_SY400_.jpg'
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/714FbDsWwKL._AC_SY400_.jpg'
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/81mVsFDow3L._AC_SY400_.jpg'
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY400_.jpg'
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY400_.jpg'
  },
  {
    id: 6,
    img: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY400_.jpg'
  },
  {
    id: 7,
    img: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY400_.jpg'
  },
  {
    id: 8,
    img: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY400_.jpg'
  },


]

function Diwali() {
  return (
    <div className='diwali-container'>
      <div className='diwali-header'>Diwali Decor</div>
      <div className='diwali-inner-container'>
        <div className='diwali-product-list'>
          {
            DiwaliListItems.map(DiwaliListItems => {
              return (
                <div className='diwali-product-item'>
                  <img src={DiwaliListItems.img} width={200} height={200} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Diwali