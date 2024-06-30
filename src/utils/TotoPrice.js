const getTotalPrice = (cart) => {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
export default getTotalPrice;
