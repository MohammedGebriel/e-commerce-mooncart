import { Link } from "react-router-dom"

export default function Banner() {
    return (
        <div className="container m-auto px-[20px]  py-20 flex flex-col lg:flex-row gap-5">
            <BannerCard className='absolute bottom-0 p-[20px] lg:flex gap-2 items-center' title='Wooden Water Bottles' description='UP TO 60% OFF' cover='/images/hero/product1-1.png' />
                <div className="flex flex-col gap-5">
                    <BannerCard className='absolute bottom-0 p-[20px]' title='Wooden Water Bottles' description='UP TO 60% OFF' cover='/images/hero/product2.png' />
                    <BannerCard className='absolute  p-[20px] top-0 lg:right-[0]' title='Wooden Water Bottles' description='UP TO 60% OFF' cover='/images/hero/product3.png' />
                </div>
            </div>
    )
}


// eslint-disable-next-line react/prop-types
export function BannerCard({title,description,cover,className}) {
    return(
        <div className="relative ">
            <img className="w-full h-full bg-cover min-h-[300px]" src={cover} alt="" />
            <div className={`${className}`}>
                <div className="mb-[20px]">
                    <h1 className="text-[30px] lg:text-[40px] text-primary font-medium">{title}</h1>
                    <p className="lg:text-[20px] text-primary">{description}</p>
                </div>
                <Link to='/shop'>
                <button className="py-[10px] min-w-[130px] h-fit px-[10px] lg:px-[20px]  text-black font-medium uppercase duration-200 border border-black hover:bg-black hover:text-white">
                    Shop Now
                </button>
                </Link>
            </div>
        </div>
    )
}