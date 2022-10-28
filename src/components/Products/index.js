import React, {useState} from 'react'
import './style.css'
import canImg from '../../assets/can.png'

function Products() {
    const [button, setButton] = useState({display: 'none'})

  return (
    <div className='product-container'>
        <div className="product-filter">
            <div className="filter-result">Sugar Free</div>
            <div className="filter-result">Limited</div>
            <div className="filter-result">Discount</div>
        </div>

        <div className="product-list">
            <div className="single"
            onMouseEnter={
                (e) => {setButton({display: 'block'})}
            } onMouseLeave={
                (e) => {setButton({display: 'none'})}
            }
            >
                <img src={canImg} alt="canproduct" className='product-img' />
                <div className="product-name">Coca Cola</div>
                <div className="product-price">$4.99/can</div>
                <button className='add-btn' style={button}>Add to Cart</button>
            </div>          
        </div>
    </div>
  )
}

export default Products