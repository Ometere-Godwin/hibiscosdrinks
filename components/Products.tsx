import { getAmazon, getProducts } from "@/helpers";
import React from "react";
import ProductsData from "./ProductsData";
import Container from "./Container";
import { DrinksProps, ProductsProps } from "../type";
import { dinksProducts } from "@/constants/data";

export default async function Products() {
  // const products = await getProducts();
  // const amazon = await getAmazon();

  return (
    // <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
    //   {products?.map((item: ProductsProps) => (
    //     <ProductsData item={item} key={item._id} />
    //   ))}

    //   {amazon?.map((item: ProductsProps) => (
    //     <ProductsData item={item} key={item._id} />
    //   ))}
    // </Container>

    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {dinksProducts?.map((item: DrinksProps) => (
        <ProductsData item={item} key={item.id} />
      ))};
    </Container>
  );
}
