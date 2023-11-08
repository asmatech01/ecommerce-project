import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import { useSelector } from "react-redux";

function Items({ currentItems }) {
  console.log("here is currect items", currentItems);

  return (
    <>
      {currentItems &&
        currentItems.map((product) => (
          <div key={product._id} className="w-full">
            <Product
              _id={product._id}
              // img={`https://cute-blue-bonobo-cuff.cyclic.app/images/${product.productImage[0].img}`}
              img={`http://192.168.100.5:443/images/${product.productImage[0].img}`}
              productName={product.name}
              price={product.price}
              color={product.color}
              des={product.description}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const products = useSelector(
    (state) => state.rootReducer.product.product.products
  );
  const filter = useSelector((state) => state.rootReducer.filter);
  console.log("filterrr;", filter);
  const filterApplied =
    filter.color ||
    filter.category ||
    filter.brand ||
    (filter.price && filter.price.priceOne && filter.price.priceTwo);

  // Apply filters to get filtered products or use all products if no filters applied
  const filteredProducts = filterApplied
    ? products.filter((product) => {
        // Filter products based on the selected criteria
        return (
          (!filter.color || product.color === filter.color) &&
          (!filter.category || product.category.name === filter.category) &&
          (!filter.price ||
            (product.price >= filter.price.priceOne &&
              product.price <= filter.price.priceTwo)) &&
          (!filter.brand || product.brand === filter.brand)
        );
      })
    : products;
    const noProductsFound = filteredProducts.length === 0;
  console.log("here is filter products", filteredProducts);


  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredProducts?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredProducts?.length;
    setItemOffset(newOffset);
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset},`
    // );
    setItemStart(newOffset);
  };

  return (
    // <div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
    //     <Items currentItems={currentItems} />
    //   </div>
    //   <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
    //     <ReactPaginate
    //       nextLabel=""
    //       onPageChange={handlePageClick}
    //       pageRangeDisplayed={3}
    //       marginPagesDisplayed={2}
    //       pageCount={pageCount}
    //       previousLabel=""
    //       pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
    //       pageClassName="mr-6"
    //       containerClassName="flex text-base font-semibold font-titleFont py-10"
    //       activeClassName="bg-black text-white"
    //     />

    //     <p className="text-base font-normal text-lightText">
    //       Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
    //       {filteredProducts?.length}
    //     </p>
    //   </div>
    // </div>
  
    <div>
    {noProductsFound ? (
      <p className="text-base font-normal text-lightText">
        No products found.
      </p>
    ) : (
      <>
        {/* Render the products and pagination when there are filtered products */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
          <Items currentItems={currentItems} />
        </div>
        <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
          <ReactPaginate
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel=""
            pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
            pageClassName="mr-6"
            containerClassName="flex text-base font-semibold font-titleFont py-10"
            activeClassName="bg-black text-white"
          />
          <p className="text-base font-normal text-lightText">
            Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
            {filteredProducts.length}
          </p>
        </div>
      </>
    )}
  </div>
  
    );
};

export default Pagination;
