import { Link } from 'react-router-dom'
import LogoImg from '../../assets/common/logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="container px-[20px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 py-14">
                <div>
                    <img src={LogoImg} alt="" className='h-7 mb-3' />
                    <div className='gap-2 flex flex-col'>
                        <p className='text-primary-gray'>Address: 451 Wall Street, UK, London</p>
                        <p className='text-primary-gray'>Email: example@domain.com</p>
                        <p className='text-primary-gray'>Call: 555-555-1234</p>
                        <h3 className='text-primary-gray text-[22px] my-2'>
                            Subscribe To Our Newsletter
                        </h3>
                        <input type="text" className='bg-[#e2dfdfc0] p-3 outline-none border rounded border-[#aaa]' placeholder='Enter Your Email Address'/>
                    </div>
                </div>
                <div>
                    <h1 className='text-[22px] font-medium text-primary'>Our Stores</h1>
                    <div className='flex flex-col gap-3'>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Normal</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop With Sidebar</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop With Category</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop Filters Top Bar</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop Wide</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>My Account</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-[22px] font-medium text-primary'>Useful Links</h1>
                    <div className='flex flex-col gap-3'>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Normal</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop With Sidebar</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop With Category</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop Filters Top Bar</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop Wide</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>My Account</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-[22px] font-medium text-primary'>Our Blog</h1>
                    <div className='flex flex-col gap-3'>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Normal</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop With Sidebar</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop With Category</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop Filters Top Bar</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>Shop Wide</Link>
                        <Link to='' className='text-primary-gray font-medium w-fit'>My Account</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
