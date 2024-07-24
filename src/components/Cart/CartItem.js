import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCartAction,
  increaseItemCountAction,
  decreaseItemCountAction,
} from "../../store/cart";
function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();
  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} />
        <button
          className="cart-item-button"
          onClick={() => {
            dispatch(increaseItemCountAction(item.id));
          }}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            if (item.count === 1) {
              return;
            }
            dispatch(decreaseItemCountAction(item.id));
          }}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            dispatch(removeFromCartAction(item.id));
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
