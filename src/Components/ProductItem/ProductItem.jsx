import plus from '../../assets/Images/icon-plus.svg'
import Cart from '../../assets/Images/icon-cart.svg'
import minus from '../../assets/Images/icon-minus.svg'
import './ProductItem.css'
import close from "../../assets/Images/icon-close.svg"
import { useState } from 'react'

function ProductItem(props) {
    //counter
    const [count, setcount] = useState(0)
    function Plus() {
        let newValue = count + 1
        setcount(newValue)
    }
    function Minus() {
        let newValue = count - 1
        setcount(newValue)
    }


    return (
        <>
            <div className='WomenPage'>
                <div className='imagesShoes'>
                    <div className='first'>
                        <a href={props.ProductPhoto1} data-lightbox="my-gallery">
                            <img src={props.ProductPhoto1} className='Img' />
                        </a>
                    </div>
                    <div className='CardsIsShoes'>
                        <a href={props.ProductPhoto1} data-lightbox="my-gallery">

                            <img src={props.ProductPhoto1} className='smallImg active' />
                        </a>
                        <a href={props.ProductPhoto2} data-lightbox="my-gallery">

                            <img src={props.ProductPhoto2} className='smallImg' />
                        </a>
                        <a href={props.ProductPhoto3} data-lightbox="my-gallery">

                            <img src={props.ProductPhoto3} className='smallImg' />
                        </a>
                        <a href={props.ProductPhoto4} data-lightbox="my-gallery">

                            <img src={props.ProductPhoto4} className='smallImg' />
                        </a>
                    </div>

                </div>

                <div className='Details'>
                    <label className='ProductName'>{props.productName}</label>
                    <label className='Titel'>{props.Title}</label>
                    <p>{props.Description}</p>

                    <div className='AllPrice'>
                        <div className="Price">
                            <label className='PriceAfter'>{props.Total}</label>
                            <label className='disc'>{props.Discount}</label>
                        </div>
                        <label className='PriceBefore'>{props.price}</label>
                    </div>
                    <div className='countAndBtn'>
                        <div className="Counter">
                            <button onClick={Minus}><img src={minus} /></button>
                            <label>{count}</label>
                            <button onClick={Plus}><img src={plus} /></button>
                        </div>
                        <div className='btnCart' >
                            <button className='AddCart'>
                                <img src={Cart} ></img>
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            {/* 
            <div className="Model">
                <div className='Model-wrapper'>
                    <img src={close} className="close-icon" />
                    <div className='product-img-model'>
                        <div className='img-thumbnail-model'>
                            < img src={props.ProductPhoto1} className='Img' />
                            <div className='img-small-model'>
                                <img src={props.ProductPhoto1} className='smallImg active' onclick="currentSlide(1)" />
                                <img src={props.ProductPhoto2} className='smallImg' onclick="currentSlide(2)" />
                                <img src={props.ProductPhoto3} className='smallImg' onclick="currentSlide(3)" />
                                <img src={props.ProductPhoto4} className='smallImg' onclick="currentSlide(4)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}
export default ProductItem