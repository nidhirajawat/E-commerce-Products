import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = "Lorem ipsum adility of human being our climated protected our launching the my products and please come to my visit website and order to of you needed.. Thank You."

const ProductDisplay = ({item}) => {
    console.log(item);

    const {name, id, price, seller, ratingsCount, img} = item;

    const [prequantity, setPreQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleDecrease = (e) => {
        if(prequantity > 1){
            setPreQuantity(prequantity - 1)
        }
    }
    const handleIncrease = () => {
        setPreQuantity(prequantity + 1)
    }
    const handleSubmit = () => {
        e.preventDefault();
        const product ={
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: quantity,
            size: size,
            color: color,
            coupon: coupon
            
        }
        // console.log(product);
        const existionCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existionProduct = existionCart.findIndex((item) => item.id === id);

        if(existionProduct !== -1){
            existionCart[existionProduct].quantity += prequantity;
        }
        else{
            existionCart.push(product);
        }
        //Local-storage........update local storage....
        localStorage.setItem("cart", JSON.stringify(existionCart))

        //reset-form-fields
        setPreQuantity(1);
        setSize("Select SIze");
        setColor("Select Color");
        setCoupon("");
    }
  return (
    <div>
       <div>
        <h4>{name}</h4>
        <p className="rating">
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <span>{ratingsCount} review </span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
       </div>

       {/* cart-components */}
       <div>
        <form onSubmit={handleSubmit}>
            <div className="select-product size">
                <select value={size} onChange={handleSizeChange}>
                    <option>Select Size</option>
                    <option value="SM">SM</option>
                    <option value="MD">MD</option>
                    <option value="LG">LG</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>

            <div className="select-product color">
                <select value={size} onChange={handleColorChange}>
                    <option>Select Color</option>
                    <option value="SM">Red</option>
                    <option value="MD">Pink</option>
                    <option value="LG">Blue</option>
                    <option value="XL">Black</option>
                    <option value="XXL">White</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            {/* cart-plus-minus */}
            <div className='cart-plus-minus'>
                 <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                 <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton'
                  value={prequantity} onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))} />
                 <div className='inc qtybutton' onClick={handleIncrease}></div>
            </div>
            {/* coupon field */}
            <div className='discount-code mb-2'>
                <input type="text" placeholder='Enter Discount Code' onChange={(e) => 
                setCoupon(e.target.value) } />
            </div>
            {/* button-field */}
            <button type='submit' className='lab-btn'><span>Add to Cart</span></button>
            <Link to='/cart-page' className='lab-btn bg-primary'>
                <span>Check Out</span>
            </Link>
        </form>
       </div>
    </div>
  )
}

export default ProductDisplay
