import { IoIosColorFilter } from "react-icons/io";
import { instagramPosts } from "../../assets/data/data";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiBox } from "react-icons/fi";

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

export default function InstagramPost() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
                {instagramPosts.map((post) => 
                    <div key={post.id} className="overflow-hidden">
                        <img src={post.image} className="w-full h-full duration-200 object-cover hover:scale-125 hover:rotate-12" alt="" />
                    </div>
                )}
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
