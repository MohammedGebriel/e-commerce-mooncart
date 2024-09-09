import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/slice/cartSlice"
import StripeCheckout from "react-stripe-checkout"

export default function CheckOutForm({total,handlePaymentSuccess}) {
    const dispatch = useDispatch()

    const handleToken = (token) => {
        handlePaymentSuccess();
        dispatch(clearCart());
    }
    return (
        <StripeCheckout
            key={1}
            token={handleToken}
            stripeKey=""
            amount={total * 100}
            name="MoonCart E-commerce"
            email="gorkcoder@gmail.com"
            description="Payment test using stripe"
        >
            <button className="py-[10px] w-full px-[10px] lg:px-[20px]   font-medium  duration-200 border border-black bg-black text-white hover:bg-white hover:text-black">
                {/* Pay ${total?.toFixed(2)} */}
                checkout
            </button>
        </StripeCheckout>
    )
}
