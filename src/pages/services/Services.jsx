import { useEffect } from 'react'
import InstagramPost from '../../components/hero/InstagramPost'
import Testimonial from '../../components/hero/Testimonial'
import RecentProduct from '../../components/product/RecentProduct'

export {Testimonial,RecentProduct,InstagramPost} from '../../'
export default function Services() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
        })
    },[])
    return (
        <>
            <InstagramPost /> 
            <RecentProduct />
            <Testimonial />
        </>
    )
}
