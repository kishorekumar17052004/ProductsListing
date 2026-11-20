import { useState } from "react"


const Products = () => {
    const [product ]=useState(  [
        {ProductsName:"Hp",Price:50000,category:"Electronics"},
        {ProductsName:"Mouse",Price:500,category:"Electronics"},
        {ProductsName:"KeyBoard",Price:700,category:"Electronics"},
        {ProductsName:"Apple",Price:100,category:"fruits"},
        {ProductsName:"Orange",Price:200,category:"fruits"},
        {ProductsName:"Banana",Price:300,category:"fruits"},
        {ProductsName:"Kiwi",Price:300,category:"fruits"},
        {ProductsName:"Milk",Price:100,category:"groceries"},
        {ProductsName:"Oil",Price:150,category:"groceries"},
        {ProductsName:"rice",Price:6000,category:"groceries"}])

    const [search, setSearch] = useState("")

    const [sortOrder, setSortOrder] = useState("")



    const filteredProducts = product.filter((products) =>
      products.ProductsName.toLowerCase().includes(search.toLowerCase())
    )




    const sortedProducts = [...filteredProducts]

    if (sortOrder === "low-to-high") {

      sortedProducts.sort((a, b) => a.Price - b.Price)
    } 
    else if (sortOrder === "high-to-low") {

      sortedProducts.sort((a, b) => b.Price - a.Price)
    }


    const handleChange = (e) => {
      setSearch(e.target.value)
    }


      return (
    <>

    <input className="border w-50" type="text" placeholder="Search Products..." onChange={handleChange}/>


    <label>
      Sort price : 
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">All</option>
        <option value="low-to-high">Low to high</option>
        <option value="high-to-low">High to low</option>
      </select>
    </label>

    <div className="flex flex-row flex-wrap gap-4">

     {sortedProducts.length > 0 ?  ( sortedProducts.map((product)=>(


        <div key={product.ProductsName} className="border p-4 rounded-lg  w-60 ">
            <h2 className="font-bold">{product.ProductsName}</h2>
            <h2>{product.Price}</h2>
            <h2>{product.category}</h2>
        </div>
     ))
    )  : (<h3>No Products Found</h3>)
    }
    </div>
    </>
  )
}

export default Products