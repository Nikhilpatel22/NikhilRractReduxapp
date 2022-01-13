import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { FaXbox, FaMinus, FaPlus } from 'react-icons/fa';
import { Card, Button, CardGroup, Row, Col } from 'react-bootstrap'


const Cart = () => {
    const { products, totalprice, totalQuentity } = useSelector(state => state.cart);
    const dispatch = useDispatch()
    // console.log(products)
    return (
        <div>
            <div>
                <h2>Your cart</h2>
                {products.length > 0 ? <>
                    <div className="cart-main">
                        <div>
                            {/* <div className="cart-heading-main">
                                <div className="cart-heading">Picture</div>
                                <div className="cart-heading">Name</div>
                                <div className="cart-heading">Price</div>
                                <div className="cart-heading">Quentity</div>
                                <div className="cart-heading">Total Price</div>
                                <div className="cart-heading">Remove-Cart</div>
                            </div> */}
                            {products.map(product => (
                                <div key={product.id}>
                                    <div className='main-card-product-cart'>
                                        <div className='main-card-product-img'><Card.Img variant="top" src={product.image} /></div>
                                        <div className='row-body-cart'>
                                            <Card.Body >
                                                <Card.Title>{product.title}</Card.Title>
                                                <div className="price-style">Price: ${product.price}</div>
                                                <div className="price-style">Total Price: ${product.price * product.quentity}</div>

                                                <div class="inc-dec-box">
                                                    <div onClick={() => dispatch({ type: 'DECREMENT', payload: product.id })} className="dec-box"><FaMinus /></div>
                                                    <div className="quentity-box">{product.quentity}</div>
                                                    <div onClick={() => dispatch({ type: 'INCREMENT', payload: product.id })} className="inc-box"><FaPlus /></div>
                                                </div>
                                                <Button onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                                    Remove To Cart
                                                </Button>
                                                {/* <Button variant="primary">Remove To Cart</Button> */}
                                            </Card.Body>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summury-box">
                            <div className="cart-summury"><p>Summary</p></div>
                            <div className="total-item">
                                <div style={{color:'#282c34'}}>
                                    Total Item
                                </div>
                                <div>{totalQuentity}</div>
                            </div>
                            <div className="total-price">
                                <div style={{color:'#282c34'}}>
                                    Total Price
                                </div>
                                <div>${totalprice}</div>
                            </div>
                        </div>
                    </div>

                </> : 'your cart is empty'}
            </div>
        </div>
    )
}

export default Cart
