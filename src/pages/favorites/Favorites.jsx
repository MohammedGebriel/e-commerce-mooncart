import {  useDispatch, useSelector } from 'react-redux'
import FrameImage from '../../assets/common/Frame.png'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import CheckOutForm from '../../components/cart/CheckOutForm'
import { addToWish, removeAllFromWish, removeFromWish } from '../../redux/slice/WishSlice'
import { useEffect } from 'react'

export default function Favorites() {
    const dispatch = useDispatch()
    const wishList  = useSelector((state) => state.wish.wishList)
    const totalQuantity = wishList.reduce((acc,current) => acc + current.quantity,0)
    const totalPrice = wishList.reduce((acc,current) => acc + (current.price * current.quantity),0)

    console.log(wishList);
    console.log(totalPrice)


    const handlePaymentSuccess= ()=> {
        console.log('==========================');
        console.log('Payment Success')
        console.log('==========================');
        
    }
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
        })
    },[])
        
    return (
        <div className=''>
            <div className="w-full h-[50vh] relative">
                <img src={FrameImage} className="w-full h-full object-cover" alt="" />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] font-semibold'>Favorites</p>
            </div>
            <div className="my-16  flex flex-col lg:flex-row gap-10  container mx-auto px-[20px] ">
                <div className="lg:w-[67%] overflow-x-auto">
                    <table className='w-full '>
                        <thead className='bg-gray-100 '>
                            <tr className='flex gap-3 w-full  text-center'>
                                <th className='uppercase p-3 w-[15%]'>Image</th>
                                <th className='uppercase p-3 w-[15%]'>Product</th>
                                <th className='uppercase p-3 w-[15%]'>Price</th>
                                <th className='uppercase p-3 w-[25%]'>Quantity</th>
                                <th className='uppercase p-3 w-[20%]'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishList.map((item)=> 
                                <tr key={item.id} className='border-b pb-3 my-3 flex gap-3 items-center '>
                                    <td className='w-[15%] !h-[120px]'>
                                        {item.cover.slice(0,1).map((ele,i)=>
                                            <img key={i} src={ele.image} className='!w-30 max-h-full' alt="" />
                                        )}
                                    </td>
                                    <td className=' w-[15%] font-medium text-center text-primary-gray'>
                                        {item.title}
                                    </td>
                                    <td className=' w-[15%] font-medium text-center text-primary-gray'>
                                        ${item.price.toFixed(2)}
                                    </td>
                                    <td className='w-[25%]'>
                                        <div className='flex gap-2 mb-5 justify-center'>
                                            <button onClick={()=> dispatch(addToWish(item))} className='p-[10px] flex justify-center items-center bg-gray-100 border'><FaPlus/></button>
                                            <input type="text" value={item.quantity} className='w-[50px] bg-gray-50 border text-center outline-none' />
                                            <button onClick={()=> dispatch(removeFromWish(item.id))} className='p-[10px] flex justify-center items-center bg-gray-100 border'><FaMinus/></button>
                                        </div>
                                    </td>
                                    <td className=' w-[20%] font-medium text-center text-primary-gray flex items-center justify-center'>
                                        <span>${item.totalPrice.toFixed(2)}</span>
                                        
                                    </td>
                                    <button className=" w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full text-primary">
                                            <IoCloseOutline size={25} onClick={()=> dispatch(removeAllFromWish(item.id))} />
                                    </button>
                                    
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className='lg:grow-[1] h-fit bg-[#dddddd63] p-4'>
                    <p className=' font-medium border-b-2 pb-2'>Cart Totals</p>
                    <div className=' border-b-2 py-2 flex '>
                        <span className=' font-medium w-[100px]'>Subtotal</span>
                        <span className='text-primary-gray'>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className=' border-b-2 py-2 flex '>
                        <span className=' font-medium w-[100px]'>Quantity</span>
                        <span className='text-primary-gray'>{totalQuantity}</span>
                    </div>
                    <div className=' border-b-2 py-2 flex  items-center'>
                        <span className=' font-medium w-[100px]'>Shipping</span>
                        <span className='text-primary-gray'>Enter your address to view shipping options</span>
                    </div>
                    <div className='  py-2 flex mb-5 '>
                        <span className=' font-medium w-[100px]'>Total</span>
                        <span className='text-primary-gray'>${totalPrice.toFixed(2)}</span>
                    </div>
                    <CheckOutForm total={totalPrice} handlePaymentSuccess={handlePaymentSuccess} />
                    {/* <button className="py-[10px] w-fit px-[10px] lg:px-[20px]   font-medium  duration-200 border border-black bg-black text-white hover:bg-white hover:text-black">
                        Proceed To checkout
                    </button> */}
                </div>
            </div>
        </div>
    )
}
