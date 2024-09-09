import '../../../public/images/hero/bg1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
    function SampleNextArrow(props) {
        const {  onClick } = props;
    return (
        <div
        className='absolute bottom-0 z-10 cursor-pointer right-[30%] lg:right-[50%]  w-[35px] h-[35px] flex justify-center items-center border rounded bg-white'
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
        className='absolute bottom-0 z-10 cursor-pointer left-[30%] lg:left-[30%]  w-[35px] h-[35px] flex justify-center items-center border rounded bg-white'
        onClick={onClick}
        >
            <div className="button">
                <FaAngleLeft size={30}/>
            </div>
        </div>
    );
}

export default function Testimonial() {
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
        <div className="bg-[url('../../../images/hero/bg1.jpg')] bg-cover   relative py-[50px] px-[10px] ">
            <span className="overlay absolute left-0 top-0 h-full w-full bg-[#ffffff71]"></span>
            <div className="container z-100 relative mx-auto flex items-center">
                <div className="w-1/2 relative flex">
                    <img src="../../../images/hero/men.png" className='max-h-[500px]' alt="" />
                    <div className='absolute hidden lg:block bg-[#dddbdbc0] top-[30%] left-[40%] p-[10px] rounded'>
                        <h1 className=' font-medium text-primary-gray'>Our Satisfied User</h1>
                        <div className='flex'>
                            <img src="../../../images/testimonial/pic1-2.png" className='rounded-full border border-white' alt="" />
                            <img src="../../../images/testimonial/pic2-2.png" className='rounded-full -ml-3 border border-white' alt="" />
                            <span className='w-[52px] h-[52px] flex justify-center items-center border border-[#777] bg-[#E3E3E3] rounded-full -ml-3'>+12K</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h1 className='text-[26px] lg:ext-[32px] font-medium text-primary'>What Our Clients Say about us</h1>
                    <p className='text-primary-gray text-[14px] lg:tex-[16px] mb-[20px]'>It is a long established fact that a render will be distracted by the readable content of a page when looking at its layout.
                        The point of using lorem is that it has a more-or-less normal distribution of letters.
                    </p>
                    <Slider {...settings} className='h-[120px]'>
                    <TestimonialCard image='../../../images/testimonial/pic5.jpg' name='Kenneth Fong' post='Undergraduate Student' />
                    <TestimonialCard image='../../../images/testimonial/pic6.jpg' name='Joe Do' post='Postgraduate Student' />
                    </Slider>
                </div>
            </div>
        </div>
    )
}


// eslint-disable-next-line react/prop-types
export function TestimonialCard({image,name,post}) {
    return(
        <div className='flex items-center gap-3'>
            <div className="image">
                <img src={image} className='rounded-full w-[70px]' alt="" />
            </div>
            <div className="">
                <h3 className="text-[20px]">{name}</h3>
                <p className='-mt-1 text-primary-gray'>{post}</p>
            </div>
        </div>
    )
}
