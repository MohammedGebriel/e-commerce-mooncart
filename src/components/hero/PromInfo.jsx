import { promotionalInfo } from "../../assets/data/data";

export default function PromInfo() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row">
            {promotionalInfo.map((info)=>
                <div key={info.id} className="relative">
                    <div className="image ">
                        <img className="min-h-[400px]" src={info.image} alt="" />
                    </div>
                    <div className="content absolute left-0 top-0 p-[20px]">
                        <p className="bg-white px-[20px] py-[10px] text-primary-gray font-medium mb-[10px] w-fit  ">{info.title}</p>
                        <h1 className="text-[28px] lg:text-[40px] font-semibold lg:w-[500px]">{info.title}</h1>
                        <p className="text-primary-gray lg:w-[450px] mb-[10px]">{info.description}</p>
                        <button  className=" cursor-pointer py-[8px] text-[14px]  px-[15px]  text-white bg-black border-black hover:bg-white hover:text-black font-medium  duration-200 border ">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}
