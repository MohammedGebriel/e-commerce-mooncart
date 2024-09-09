/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { herolist } from '../../assets/data/data'
import {  useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
    function SampleNextArrow(props) {
        const {  onClick } = props;
    return (
        <div
        className='absolute bottom-0 z-10 cursor-pointer right-[40%] lg:right-[47%] w-[35px] h-[35px] flex justify-center items-center border rounded bg-white'
        onClick={onClick}
        >
            <div className="button">
                <FaAngleRight size={30}/>
            </div>
        </div>
    );
    }

// eslint-disable-next-line no-unused-vars
    function SamplePrevArrow(props) {
// eslint-disable-next-line react/prop-types
    const {  onClick } = props;
    return (
        <div
        className='absolute bottom-0 z-10 cursor-pointer left-[40%] lg:left-[47%] w-[35px] h-[35px] flex justify-center items-center border rounded bg-white'
        onClick={onClick}
        >
            <div className="button">
                <FaAngleLeft size={30}/>
            </div>
        </div>
    );
}

export default function Hero() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />
        // focusOnSelect: true
        // swipeToSlide: true
        
    };

    return (
        <section className="bg-white-100 lg:!max-h-[80%] flex flex-wrap lg:items-center">
            <Slider {...settings} className='w-full overflow-hidden'>
                {herolist.slice(0,2).map((item) => 
                    (<HeroItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    prices = {item.price}
                    colors = {item.color}
                    image = {item.image}
                /> )
                )}
            </Slider>
        </section>
    )
}

// eslint-disable-next-line react/prop-types
export  function HeroItem({title,description,prices,colors,image}) {
    // eslint-disable-next-line react/prop-types
    const [price,setPrice] = useState(prices[0].value);
    // eslint-disable-next-line react/prop-types
    const [color,setColor] = useState(colors[0].value);


    function handleChangeColor (newColor) {
        setColor(newColor)
        prices.map((item) => {
            item.color === newColor ? setPrice(item.value) : item
        })
    }
    
    return (
        <div className='w-full flex flex-col lg:items-center lg:flex-row max-h-full z-10'>
            <div className="left flex flex-col  w-full lg:w-1/2 p-[20px] lg:pl-[100px]">
                <h1 className="text-[34px] lg:text-[60px] font-medium text-primary ">{title}</h1>
                <p className='text-[14px] lg:text-[16px] text-[#777] mb-[20px] font-medium'>{description}</p>
                <div className='flex gap-[20px] mb-[25px]'>
                    <div className="price">
                        <p className='text-[16px] text-[#777] mb-[10px]'>Prices</p>
                        <p className=' font-medium text-primary text-[18px]'>${price}</p>
                    </div>
                    <div className="color">
                        <p  style={{color:  color}} className='text-[16px] text-[#777] mb-[15px]'>Colors</p>
                        <div className=' font-medium text-primary text-[18px] flex gap-[10px]'>
                            {colors.map((item,id)=>
                            <span onClick={()=> handleChangeColor(item.value)} key={id} style={{background:item.value}} className='w-[15px] h-[15px] rounded-full cursor-pointer'>
                                
                            </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="buttons flex gap-[20px]">
                    <Link to='' className="py-[10px] px-[10px] lg:px-[20px] bg-black text-white font-medium uppercase duration-200 border-2 border-black hover:bg-white hover:text-black">View Details</Link>
                    <Link to='/shop' className="py-[10px] px-[10px] lg:px-[20px] bg-white text-black font-medium uppercase duration-200 border-2 border-black hover:bg-black hover:text-white">View Shop</Link>
                </div>
            </div>
            <div className="right w-full lg:w-1/2  lg:border-r-[50px] border-black flex justify-center items-center   bg-white lg:min-h-screen  p-[20px]">
                <div>
                    <img className='max-h-[200px] lg:max-h-[500px]' src={image} alt="" />
                </div>
            </div>
        </div>      
    )
}

HeroItem.PropTypes = {
    title : PropTypes.required,
    description : PropTypes.required,
    prices:  PropTypes.required,
    colors: PropTypes.required,
}
