import { useEffect } from "react";
import { productlists } from "../../assets/data/data";
import { ProductHomeCard } from "../../components/product/ProductHomeCard";


export default function Shop() {
    useEffect(()=>{
    
        window.scrollTo({
            top: 0,
            left:0
        })
        
        },[])
        
    return (
        <div className="py-20 px-[20px] bg-white-100">
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productlists.map((item)=> 
                    (
                        <div key={item.id}>
                            <ProductHomeCard
                                className='px-2'
                                id = {item.id}
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
    )
}
