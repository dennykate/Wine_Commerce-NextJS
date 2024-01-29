import { CartContainer, Checkout } from "./";

const Cart = () => {
  return (
    <div className="sm:py-20 py-10 flex items-start gap-4 lg:flex-row flex-col">
      <CartContainer />
      <Checkout />
    </div>
  );
};

export default Cart;
