import { IRenameProduct } from "../../type";

interface IProductProps {
  product: IRenameProduct;
}

const ProductCart = ({
  product: { productName, price, description, category },
}: IProductProps) => {
  return (
    <div className="p-6 basis-1/3 text-center border">
      <h3 className="font-bold">{productName}</h3>
      <p>{description}</p>
      <p>price: ${price}</p>
      <p>category is: {category}</p>
    </div>
  );
};

export default ProductCart;
