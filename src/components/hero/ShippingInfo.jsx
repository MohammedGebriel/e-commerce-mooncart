import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaCircleDollarToSlot,FaMessage  } from "react-icons/fa6";

const additionalInfo = [
    {
        id: 1,
        title: "FREE SHIPPING",
        description: "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
        icon: <FaShippingFast size={50} />,
    },
    {
        id: 2,
        title: "24/7 SUPPORT",
        description: "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
        icon: <MdOutlineMarkUnreadChatAlt size={50} />,
    },
    {
        id: 3,
        title: "MONEY BACK",
        description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
        icon: <FaCircleDollarToSlot size={50} />,
    },
];
    

export default function ShippingInfo() {
    return (
        <div className="my-20 container mx-auto px-[20px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[80px]">
                {additionalInfo.map((info) => 
                <div key={info.id} className="flex flex-col items-center gap-3 text-center">
                    <span className=" text-primary-green">{info.icon}</span>
                    <h3 className="text-[18px] font-medium">{info.title}</h3>
                    <p className=" text-primary-gray">{info.description}</p>
                </div>
                )}
            </div>

            <div className="bg-primary p-[15px] lg:p-[30px] flex justify-between items-center flex-col lg:flex-row gap-5">
                <div className="flex items-center gap-3">
                    <span className="text-white text-[30px] lg:text-[50px]"><FaMessage /></span>
                    <div>
                        <h2 className="text-white text-[16px] lg:text-[26px] font-medium uppercase">Subscribe To OUR NEWSLETTER</h2>
                        <p className="text-primary-gray text-[14px] lg:text-[18px] lg:-mt-2">Get Latest News, Offer And Discounts.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <input className="w-full p-[8px] outline-none" type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}
