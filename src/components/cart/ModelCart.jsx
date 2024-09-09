import { useState } from "react";
import { FaRegHeart,FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { removeAllFromCart } from "../../redux/slice/cartSlice";
import { removeAllFromWish } from "../../redux/slice/WishSlice";
import { Link } from "react-router-dom";

export default function ModelCart() {
    const [isOpen,setIsOpen] = useState(false);
    // const [isClose,setIsClose] = useState(false);
    const [activeTab,setActiveTab] = useState('cart')

    const openModal = ()=> {
        setIsOpen(true)
    }

    const closeModal = ()=> {
        setIsOpen(false)
    }

    
    const itemsList  = useSelector((state) => state.cart.itemList)
    const totalQuantity = itemsList.reduce((acc,current) => acc + current.quantity,0)
    const totalPrice = itemsList.reduce((acc,current) => acc + (current.price * current.quantity),0)

    const wishList = useSelector((state) => state.wish.wishList)
    const totalQuantityWish = wishList.reduce((acc,current) => acc + current.quantity,0)

    

    return (
        <>
            <button onClick={openModal}  className="wish relative">
                <FaRegHeart onClick={()=> setActiveTab('wishlist')}  className=' cursor-pointer'/>
                <span className="badge bg-green-500 absolute -top-[12px] -right-[12px] w-[20px] h-[20px] text-[12px] font-medium text-white flex justify-center items-center rounded-full">
                    {totalQuantityWish}
                </span>
            </button>
            <button onClick={openModal} className="cart relative">
                <FaShoppingCart onClick={()=> setActiveTab('cart')} className=' cursor-pointer'/>
                <span className="badge bg-green-500 absolute -top-[12px] -right-[12px] w-[20px] h-[20px] text-[12px] font-medium text-white flex justify-center items-center rounded-full">
                    {totalQuantity}
                </span>
            </button>
            {isOpen &&
                <>
                    <div onClick={closeModal}  className="overlay  fixed top-0 left-0 bg-[#00000086] h-full w-full z-[100]"></div>
                    <motion.div
                        initial={{ opacity: 0.5, x: "-100% "}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-[70%] overflow-y-auto lg:w-[30%] left-0 top-0  h-screen bg-white fixed z-[1000] p-6 lg:p-8"
                    >
                        <div className="flex gap-5 ">
                            <div onClick={()=>setActiveTab('cart')} className={`${activeTab === 'cart' ? 'border-b-primary-green' : ''} font-medium  w-[50%] cursor-pointer text-black text-[14px] flex gap-2 items-center border-b-2  pb-2`}>
                                <button className="">Shopping Cart</button>
                                <span className="h-[20px] w-[20px] flex  justify-center items-center bg-black text-white rounded-full">{totalQuantity}</span>
                            </div>
                            <div onClick={()=>setActiveTab('wishlist')} className={`${activeTab === 'wishlist' ? 'border-b-primary-green' : ''} font-medium cursor-pointer text-black text-[14px] flex w-[50%] justify-center gap-2 items-center border-b-2 pb-2`}>
                                <button className="">Wishlist</button>
                                <span className="h-[20px] w-[20px] flex justify-center items-center bg-black text-white rounded-full">{totalQuantityWish}</span>
                            </div>
                        </div>
                        {
                            activeTab === 'cart'
                            ?
                            <div className=" py-5">
                                {itemsList.map((item)=> 
                                <ProductCart 
                                    key={item.id} 
                                    id={item.id} 
                                    cover={item.cover} 
                                    price={item.price} 
                                    quantity={item.quantity} 
                                    title={item.title} 
                                    totalPrice={item.totalPrice} 
                                />
                                )}
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <h2 className=" font-medium text-black">SubTotal:</h2>
                                        <p className="font-medium text-black">${totalPrice.toFixed(2)}</p>
                                    </div> 
                                    <Link to='/cart'>
                                        <button className="py-[10px] w-full px-[10px] lg:px-[20px]   font-medium uppercase duration-200 border border-black bg-black text-white hover:bg-white hover:text-black">
                                            View Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            : 
                            <div className=" py-5">
                                {wishList.map((item)=> 
                                <ProductCartWish 
                                    key={item.id} 
                                    id={item.id} 
                                    cover={item.cover} 
                                    price={item.price} 
                                    quantity={item.quantity} 
                                    title={item.title} 
                                    totalPrice={item.totalPrice} 
                                />
                                )}
                                <div className="mt-5">
                                    {/* <div className="flex justify-between">
                                        <h2 className=" font-medium text-black">SubTotal:</h2>
                                        <p className="font-medium text-black">${totalPrice.toFixed(2)}</p>
                                    </div>  */}
                                    <Link to='/favorites'>
                                        <button className="py-[10px] w-full px-[10px] lg:px-[20px]   font-medium uppercase duration-200 border border-black bg-black text-white hover:bg-white hover:text-black">
                                            Check Your Favorites
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        }
                    </motion.div>
                </>
            }
        </>
    )
}


// eslint-disable-next-line no-unused-vars
export  function ProductCart({id,cover,price,quantity,title}) {
    
    const dispatch = useDispatch()
    
    return (
        <div className=" mt-3 pb-3 border-b border-b-gray-200">
            <div className="flex items-center gap-5 justify-between">
                <div className="flex items-center gap-5">
                    <div className="image w-20 h-20">
                        {cover.slice(0,1).map((image,i)=>
                        <img key={i} className="min-w-full h-full object-cover" src={image.image} alt="" /> 
                        )}
                    </div>
                    <div className="content text-[14px] lg:text-[16px]">
                        <h3 className="">{title}</h3>
                        <p className="text-primary-green">{quantity} x {(price).toFixed(2)}</p>
                    </div>
                </div>
                <button className=" w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full text-primary">
                    <IoCloseOutline size={25} onClick={()=> dispatch(removeAllFromCart(id))} />
                </button>
            </div>
        </div>
    )
}




// eslint-disable-next-line no-unused-vars
export  function ProductCartWish({id,cover,price,quantity,title}) {
    
    const dispatch = useDispatch()
    
    return (
        <div className=" mt-3 pb-3 border-b border-b-gray-200">
            <div className="flex items-center gap-5 justify-between">
                <div className="flex items-center gap-5">
                    <div className="image w-20 h-20">
                        {cover.slice(0,1).map((image,i)=>
                        <img key={i} className="min-w-full h-full object-cover" src={image.image} alt="" /> 
                        )}
                    </div>
                    <div className="content text-[14px] lg:text-[16px]">
                        <h3 className="">{title}</h3>
                        <p className="text-primary-green">{quantity} x {(price).toFixed(2)}</p>
                    </div>
                </div>
                <button className=" w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full text-primary">
                    <IoCloseOutline size={25} onClick={()=> dispatch(removeAllFromWish(id))} />
                </button>
            </div>
        </div>
    )
}
