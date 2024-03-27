import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/store/configureStore";
import { useEffect, useState } from "react";
import agent from "../../app/API/agent";
import { setBasket } from "../baskets/basketSlice";
import LoadingComponent from "../../app/layout/LoadingComponents";

const stripePromise = loadStripe("pk_test_51Oyae4CxDLJdfArlQvpbwY5ZFwFAFucDLYwEWHJ5gAkhWToCDJymRVj3UOMjn9cxhPP3VkWVMMxaKuIUfnuLJ1Aj00leYW3NjZ");

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch])

    if(loading) return <LoadingComponent message="Loading Checkout ..." />
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    );
}