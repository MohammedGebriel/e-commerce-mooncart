import { useParams } from 'react-router-dom'
import { productlists } from '../../assets/data/data';
import { FaRegStar, FaStar, FaStarHalfAlt,FaPlus,FaMinus,FaRegHeart   } from 'react-icons/fa';
import { useState } from 'react';
import RecentProduct from '../../components/product/RecentProduct';
import { IoIosColorFilter } from 'react-icons/io';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiBox } from 'react-icons/fi';
import Slider from "react-slick";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromItem } from '../../redux/slice/cartSlice';
import { addToWish } from '../../redux/slice/WishSlice';



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

export default function ProductDetails() {
    const {id} = useParams()
    const product = productlists.find((product) => 
        product.id == id
    )
    const {title,description,images,discount,rating,price,color} = product

    
    const dispatch = useDispatch()
    const addCart = () => {
        dispatch(addToCart({id,title,price:price[0].value - (price[0].value - discount) /100 ,images}))
    }
    const addWish = () => {
        dispatch(addToWish({id,title,price:price[0].value - (price[0].value - discount) /100 ,images}))
    }


console.log(product);

    const [selectedColor,setSelectedColor] = useState(color[0].value)
    const [selectedPrice,setSelectedPrice] = useState(price[0].value)

    const handleSelctColor = (c) => {
        setSelectedColor(c);
        const newPrice = price.filter((p)=>
            p.color === c
        )
        setSelectedPrice(newPrice[0].value)
    }
    window.scrollTo({top:0 ,left:0,behavior:"smooth"})

    // eslint-disable-next-line react/prop-types
    const CustomPage = ({index,onClick}) => (
            <img className='' src={images[index].image} alt=""  onClick={onClick}/>
    )

    const settings = {
        customPaging:(i) => <CustomPage index={i} />,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const filterDiscoverItems = [
        {
            id:1,
            title: 'Filter & Discover',
            icon : <IoIosColorFilter size={70} />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur.'
        },
        {
            id:2,
            title: 'Add To Cart',
            icon : <IoAddCircleOutline size={70} />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur.'
        },
        {
            id:3,
            title: 'Fast Shipping',
            icon : <MdOutlineLocalShipping size={70} />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur.'
        },
        {
            id:4,
            title: 'Enjoy The Product',
            icon : <FiBox size={70} />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur.'
        },
    ]

    
    return (
        <>
            <div className='container my-10 mx-auto '>
                <div className='flex  flex-col lg:flex-row mb-[50px]'>
                    <div className="image p-[20px] lg:w-1/2 relative">
                    <Slider {...settings} className='w-full'>
                        {images.map((image,index) => 
                        <img  key={index} src={image.image} alt="" className='w-full' />
                        )}
                    </Slider>

                    </div>
                    <div className="lg:w-1/2 px-[20px] lg:pt-10 lg:px-12">
                        <button className='bg-[#333] py-2 px-4 text-white font-medium'>SALE {discount}% OFF</button>
                        <h2 className='text-[34px] font-medium'>{title}</h2>
                        <div className='flex gap-2 -mt-2 items-center'>{RenderRatingStars(rating)} <span className=''>{rating} Review</span></div>
                        <p className='my-4'>{description}</p>
                        <div className='mb-4'>
                            <p  className='text-primary-gray mb-1 font-medium'>Colors</p>
                            <div className='flex gap-3 bg-[#5853532f] w-fit p-2'>
                                {
                                    color.map((c,index)=> 
                                        <span onClick={()=> handleSelctColor(c.value)}  style={{background: c.value}} key={index} className='w-[15px] h-[15px] rounded-full cursor-pointer'>
                                        </span>
                                ) 
                                }
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-primary-gray mb-1 font-medium'>Prices</p>
                            <div className='flex gap-3 items-center'>
                                <span className='text-primary-gray font-medium line-through'>${selectedPrice}</span>
                                <span className='text-primary-green font-medium text-[20px]'>${(selectedPrice - (discount*selectedPrice/100)).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-5'>
                            <button onClick={addCart}  className='p-[10px] flex justify-center items-center bg-gray-100 border'><FaPlus/></button>
                            <input type="text" value='1' className='w-[50px] bg-gray-50 border text-center outline-none' />
                            <button onClick={()=> dispatch(removeFromItem(id))} className='p-[10px] flex justify-center items-center bg-gray-100 border'><FaMinus/></button>
                            <button onClick={addCart}  className='py-[10px] px-[10px] lg:px-[20px] bg-black text-white font-medium uppercase duration-200 border-2 border-black hover:bg-white hover:text-black'>ADD To CART</button>
                        </div>
                        <div className='flex gap-3 mb-5'>
                            <button onClick={addWish}  className="py-[10px] px-[10px] flex items-center gap-2 lg:px-[20px] bg-white text-black font-medium  duration-200 border-2 border-black hover:bg-black hover:text-white">
                                <FaRegHeart  /> Add to Wishlist
                            </button>
                            <button className="py-[10px] px-[10px] flex items-center gap-2 lg:px-[20px] bg-white text-black font-medium  duration-200 border-2 border-black hover:bg-black hover:text-white">
                                Compare
                            </button>
                        </div>
                        <hr className='mb-5'/>
                        <div>
                            <p><span className=' font-bold'>SKU</span>:PRT584E64A</p>
                            <p><span className=' font-bold'>Category</span>:Baby Product</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-8 px-5'>
                    <div className='left lg:w-1/2 '>
                        <div className='mb-[30px]'>
                            <h1 className='text-[32px] font-medium'>Fits Your Child</h1>
                            <p className='text-primary-gray'>Designed for superior child comfort, Onefit provides extra rear facing legroom and multiple recline options in every mode of use. With the widest range of height adjustments, the easy-adjust headrest system adjusts with the harness to grow with your child. One fit accommodates tiny passengers from the very start with a removable head and body support insert for newborns weighing 5-11 Ib </p>
                        </div>
                        <div>
                            <h1 className='text-[32px] font-medium mb-[10px]'>Specifications</h1>
                            <div className='flex flex-col gap-2'>
                                <p className='text-primary-gray'>
                                    Assembled Dimensions (L X W X H): 21.5  X 19 X 27
                                </p>
                                <p className='text-primary-gray'>
                                    Assembled Product Weight: 25IBS
                                </p>
                                <p className='text-primary-gray'>
                                    Harness Mode - Rear- Facing 5-40 IBS
                                </p>
                                <p className='text-primary-gray'>
                                    Harness Mode - Forward- Facing25-65 IBS
                                </p>
                                <p className='text-primary-gray'>
                                    Booster Mode - Harness+ Booster 40-65 IBS
                                </p>
                                <p className='text-primary-gray'>
                                    Booster Mode - Backlessn/a
                                </p>
                                <p className='text-primary-gray'>
                                    Rear-Facing Child Max Height Capacity43 in
                                </p>
                                <p className='text-primary-gray'>
                                    Forward-Facing Child Max Height Capacity54 in
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right lg:w-1/2 h-fit grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                        <div className="box  h-fit px-[10px] py-[40px] bg-gray-100 text-center">
                            <h3 className='text-[22px] font-medium mb-2'>All-in-One Car Seat</h3>
                            <p className=' text-primary-gray'>One car seat that fits your child, Vehicle and life from birth through booster</p>
                        </div>
                        <div className="box h-fit  px-[10px] py-[40px] bg-gray-100 text-center">
                            <h3 className='text-[22px] font-medium mb-2'>Space-Saving Design</h3>
                            <p className=' text-primary-gray'>One car seat that fits your child, Vehicle and life from birth through booster</p>
                        </div>
                        <div className="box h-fit  px-[10px] py-[40px] bg-gray-100 text-center">
                            <h3 className='text-[22px] font-medium mb-2'>Easiest to Install Correctly</h3>
                            <p className=' text-primary-gray'>One car seat that fits your child, Vehicle and life from birth through booster</p>
                        </div>
                        <div className="box h-fit  px-[10px] py-[40px] bg-gray-100 text-center">
                            <h3 className='text-[22px] font-medium mb-2'>No Added Chemicals</h3>
                            <p className=' text-primary-gray'>One car seat that fits your child, Vehicle and life from birth through booster</p>
                        </div>
                        
                    </div>
                </div>
                <RecentProduct />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {filterDiscoverItems.map((item) => 
                    <div key={item.id} className="py-6 px-5 flex  relative gap-3 items-center bg-[#ebe8e8]">
                        <div className="icons">
                            {item.icon}
                        </div>
                        <div className="data">
                            <h1 className="text-[18px] font-medium text-primary">{item.title}</h1>
                            <p className="text-[14px] text-primary-gray">{item.description}</p>
                        </div>
                        <span>
                        </span>
                    </div>
                )}
            </div>
        </>

    )
}
