function Wishlist({ wishlist, toggleWishlist, addToCart }) {

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>

          <button onClick={() => addToCart(item)}>
            Move to Cart
          </button>

          <button onClick={() => toggleWishlist(item)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist