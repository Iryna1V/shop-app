import { data } from "./data"
function Buttons({ setClothes }) {
const handleFilter = (searchTerm) => {
  const newClothesArray = data.filter(item => 
    item.searchTerm.includes(searchTerm)
  );
    setClothes(newClothesArray);
};

// function Buttons ({filteredClothes, setClothes}) {
  // const filteredClothes = (searchTerm) => {
  //   const newClothesArray = data.filter(item => item.searchTerm.includes(searchTerm));
  
  return (
    <div className="cont">
      <button className="change" onClick={() => setClothes(data)}>Show all</button>
      <button className="change" onClick={() => handleFilter("man")}>Man</button>
      <button className="change" onClick={() => handleFilter("woman")}>Woman</button>
      <button className="change" onClick={() => handleFilter("dress")}>Dresses</button>
      <button className="change" onClick={() => handleFilter("pants")}>Pants</button>
      <button className="change" onClick={() => handleFilter("skirt")}>Skirts</button>
      <button className="change" onClick={() => handleFilter("shoes")}>Shoes</button>
      <button className="change" onClick={() => handleFilter("shirt")}>Shirts</button>
    </div>
  );
}
export default Buttons;