import { productlists } from "../../assets/data/data";
import { ProductHomeCard } from "./ProductHomeCard";

export default function ProductsHome() {
    return (
        <div className="py-20 px-[20px] bg-white-100 ">
            <div className="container mx-auto">
                <h1 className="text-[20px] lg:text-[23px] text-primary font-medium">Most Popular Products</h1>
                <div className=" flex gap-[15px] items-center uppercase text-[14px]">
                    <p className=" text-gray-500 font-medium">All Products(39)</p>
                    <p className=" text-primary-green font-medium">WOODEN Products(15)</p>
                </div>
                <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[15px]">
                    {productlists.map((item)=> 
                        (
                            <div key={item.id}>
                                <ProductHomeCard 
                                    id={item.id}
                                    title = {item.title}
                                    description = {item.description}
                                    images = {item.images}
                                    discount = {item.discount}
                                    featured = {item.featured}
                                    rating = {item.rating}
                                    prices = {item.price}
                                    color = {item.color}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}


