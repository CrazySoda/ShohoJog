// import React, { Fragment, useEffect, useState } from "react";
// const all_products = () => {
//     const [products, setproducts] = useState([]);
//     const get_all_products = async () => {
//         try {
//             const response = await fetch("http://localhost:5000/product/all_products");
//       const jsonData = await response.json();
//        // console.log(jsonData);
//        setproducts(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   useEffect(() => {
//     get_all_products();
//   },[]);
//   console.log(products);
// };
// export default all_products;
//OLD 2
// 
// import React, { Fragment, useEffect, useState } from "react";
// import "./AllProducts.css"; // Import CSS file for styling

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   const getAllProducts = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/product/all_products");
//       const jsonData = await response.json();
//       setProducts(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   console.log(products); // This will log the products array to the console

//   return (
//     <Fragment>
//       <table className="products-table">
//         <thead>
//           <tr>
//             <th>Product Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.product_id}>
//               <td>{product.product_name}</td>
//               <td>{product.price}</td>
//               <td>{product.product_category}</td>
//               <td>{product.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// };

// export default AllProducts;
import React, { Fragment, useEffect, useState } from "react";
import "./AllProducts.css"; // Import CSS file for styling
import Card from "./Card"; // Import Card component

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/product/all_products");
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products); // This will log the products array to the console

  return (
    <Fragment>
      <div className="products-container"> {/* Apply CSS styles to this container */}
        {products.map(product => (
          <Card
            key={product.product_id}
            productName={product.product_name}
            price={product.price}
            category={product.product_category}
            status={product.status}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default AllProducts;


