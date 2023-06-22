import { useCart } from "../../context/cartContext";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";

const CartPage = () => {
  const { cartList } = useCart();
  const cartLength = cartList.length;

  return (
    <main className="h-screen overflow-auto">
      {cartLength ? <CartList /> : <CartEmpty />}
    </main>
  );
};

export default CartPage;
