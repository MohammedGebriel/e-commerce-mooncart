import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa";
import { ProductHomeCard } from "./ProductHomeCard";
import { productlists } from "../../assets/data/data";

// eslint-disable-next-line no-unused-vars
function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const {onClick} = props;
return (
    <div
    className='absolute right-0 top-1/2 -translate-y-1/2  z-10 cursor-pointer  w-[40px] h-[40px] flex justify-center items-center border rounded-full bg-white'
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
    className='absolute  left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer  w-[40px] h-[40px] flex justify-center items-center border rounded-full bg-white'
    onClick={onClick}
    >
        <div className="button">
            <FaAngleLeft size={30}/>
        </div>
    </div>
);
}

export default function RecentProduct() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div className="py-20 px-[20px]">
            <div className="container mx-auto">
                <div className="mb-[20px]">
                    <h1 className=" text-[28px] font-medium text-primary">Recent Product</h1>
                    <p className=" uppercase font-medium text-primary-gray">Discover The most Trending products in Mooncart.</p>
                </div>
                <Slider {...settings} className="flex gap-2 ">
                    {productlists.map((item)=> 
                            (
                                    <ProductHomeCard 
                                        overlay_hidden={true}
                                        className='px-[10px]'
                                        id={item.id}
                                        key={item.id}
                                        title = {item.title}
                                        description = {item.description}
                                        images = {item.images}
                                        discount = {item.discount}
                                        featured = {item.featured}
                                        rating = {item.rating}
                                        prices = {item.price}
                                        color = {item.color}
                                    />
                            )
                        )}
                </Slider>
            </div>
        </div>
    )
}
