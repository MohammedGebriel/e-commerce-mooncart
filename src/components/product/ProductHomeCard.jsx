/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart,FaRegStar,FaShoppingCart, FaStar, FaStarHalfAlt,FaFacebookF,FaInstagram,FaTwitter   } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { addToWish } from "../../redux/slice/WishSlice";

export const RenderRatingStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStars = rating % 1 !== 0;
    const stars = [];

    for (let i =1; i <= totalStars; i++) {
        if(i <= fullStars) {
            stars.push(<FaStar key={i} color="#ff8a00"/>)
        } else if (hasHalfStars && i === fullStars + 1) {
            stars.push(<FaStarHalfAlt  key='half-star' color="#ff8a00"/>)
        }else {
            stars.push(<FaRegStar key={i} color="#ff8a00"/>)
        }
    }
    return stars;
}


// eslint-disable-next-line no-unused-vars, react/prop-types
export function ProductHomeCard({id,title,description,images,discount,featured,rating,prices,color,className,overlay_hidden}) {
    // eslint-disable-next-line no-unused-vars
    const [price,setPrice] = useState(
        prices[0].value
    )
    const [isOpenModal,setIsOpenModal] = useState(false);
    const closeModal = () => {
        setIsOpenModal(false)
    }
    const openModal = () => {
        setIsOpenModal(true)
    }




    const dispatch = useDispatch();
    // const discountPrice = price[0].value - (price[0].value - discount) /100 
    const addCart = () => {
    dispatch(addToCart({id,title,price:prices[0].value - (prices[0].value - discount) /100 ,images}))
    }
    const addWish = () => {
    dispatch(addToWish({id,title,price:prices[0].value - (prices[0].value - discount) /100 ,images}))
    }
    
    

    return(
        <>
            <div className={`group ${className}`}>
                <div className="image relative overflow-hidden ">
                    {images?.slice(0,1).map((image,index)=> 
                    <div key={index}>
                        <img src={image.image} alt="" className=" object-cover w-full"/>
                    </div>
                    )}
                    <p className="discount absolute left-[10px] top-[10px] bg-black text-white px-[15px] py-[5px] font-medium">{discount}%</p>
                    {
                        featured ?
                        <p className="discount absolute right-[10px] top-[10px] bg-primary-green text-white px-[15px] py-[5px] font-medium">Featured</p>
                        :   null
                    }
                    <div className={`overlay  flex gap-3 absolute bottom-[-100px] group-hover:bottom-[10px] duration-500   justify-center w-full ${overlay_hidden ? 'hidden': ''}`}>
                        <span onClick={openModal}  className=" cursor-pointer py-[5px] text-[14px]  h-fit px-[10px]  text-white bg-black border-black hover:bg-white hover:text-black font-medium  duration-200 border " to='/'>
                            Quick View 
                        </span>
                        <span onClick={addCart} className=" cursor-pointer py-[5px] text-[14px]  flex justify-center items-center px-[10px]   font-medium  duration-200 border text-white bg-black border-black hover:bg-white hover:text-black" to='/'>
                            <FaShoppingCart />
                        </span>
                        <span onClick={addWish} className=" cursor-pointer py-[5px] text-[14px] flex justify-center items-center   px-[10px]   font-medium  duration-200 border text-white bg-black border-black hover:bg-white hover:text-black" to='/'>
                            <FaHeart />
                        </span>
                    </div>
                </div>
                <div className="content py-6 bg-white flex flex-col items-center gap-1 z-20">
                    <Link to={`/product-details/${id}`}>
                        <p className="text-primary-gray font-medium text-[20px]">{title}</p>
                    </Link>
                    <div className="flex items-center gap-2">{RenderRatingStars(rating)}</div>
                    <div className="price flex gap-3 text-[18px]">
                        <p className="text-primary-gray font-medium line-through">${price}</p>
                        <p className="text-primary-green font-medium ">${(price - (price * discount)/100).toFixed(2) }</p>
                    </div>
                </div>
                
                {isOpenModal && 
                    <>
                        <div className="absolute top-0 left-0  w-full min-h-full bg-[#000000b6] z-[100] ">
                            <div className=" sticky  top-1/2 -translate-y-1/2 flex justify-center items-center">
                                    <div className="content flex h-[400px]   bg-white w-[90%]  lg:w-[50%]">
                                        <div className="image w-[100%] hidden lg:block   lg:w-[50%]">
                                        {images?.slice(0,1).map((image,index)=> 
                                            <div key={index} className="h-full">
                                                <img src={image.image} alt="" className=" !min-h-full     object-cover"/>
                                            </div>
                                        )}
                                        </div>
                                        <div className="content relative lg:w-[50%] h-[400px] overflow-auto p-[20px]">
                                            <button className=" py-[5px] px-[10px] font-medium text-white  bg-[#616DF4] text-[14px]">
                                                SALE 20% OFF
                                            </button>
                                            <h2 className="text-[30px] font-medium">{title}</h2>
                                            <div className="flex items-center gap-1 -mt-1">{RenderRatingStars(rating)}</div>
                                            <div className="price flex gap-3 my-2 text-[18px]">
                                                <p className="text-primary-gray font-medium line-through">${price}</p>
                                                <p className="text-primary-green font-medium ">${(price - (price * discount)/100).toFixed(2) }</p>
                                            </div>
                                            <p className="text-[14px] text-primary-gray mb-[10px]">{description}</p>
                                            <div className="flex gap-2">
                                                <input className=" text-center border-2 border-black px-[15px] py-[5px] w-[40px]" type="text" value='1' name="" id="" />
                                                <button onClick={()=> dispatch(addCart())} className=" cursor-pointer py-[5px] text-[14px]  flex justify-center items-center px-[15px]   font-medium  duration-200 border text-white bg-black border-black hover:bg-white hover:text-black">ADD TO CART</button>
                                            </div>
                                            <hr className="my-4"/>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-2">
                                                    <p className=" font-medium text-primary ">Category:</p>
                                                    <p className=" text-primary-gray">Wooden Product</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <p className=" font-medium text-primary ">Tag:</p>
                                                    <p className=" text-primary-gray">Wooden</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <p className=" font-medium text-primary ">Share:</p>
                                                    <div className="flex gap-2 items-center text-[14px]">
                                                        <FaFacebookF />
                                                        <FaInstagram />
                                                        <FaTwitter />
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={closeModal} className="close cursor-pointer text-white bg-primary-green absolute top-0 right-0 p-[10px] px-[15px]">
                                                <FaX />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </>
                }
            </div>

            </>
    )
}
