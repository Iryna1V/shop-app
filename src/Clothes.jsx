function Clothes ({ itemsForSale }) {
  return (
    <div className="products">
  {itemsForSale.map ((element => {
    const {id, name, searchTerm, price, image, title } = element;

    return (
      <div className = "product-card" key={id}>
        <img src= {image} width="400px" height="500px"/>
        <div className= "product-info">
          <h3>{name}</h3>
          <h3>{searchTerm}</h3>
          <h4> $ {price}</h4>
        </div>
        <Link to={`/about/${title}`}>See more</Link>
      </div>
    )
  }))}
  </div>
);
}
export default Clothes;