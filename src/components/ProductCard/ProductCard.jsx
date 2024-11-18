import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ''}
      className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-white border border-black rounded-lg shadow-lg hover:shadow-xl hover:ring-4 hover:ring-[#E63946] hover:ring-opacity-50 active:ring-5 active:ring-[#6247eb] transition-all"
    >
      <img 
        src={product?.imageUrl ?? ''} 
        alt={product?.name ?? 'No Title'} 
        className="block max-h-[400px] mb-4 object-cover rounded-t-lg" // Rounded top corners for image
      />
      <div className="flex flex-col gap-2">
        <h4 className="font-medium text-[20px] text-black">{product?.name ?? 'No Title'}</h4>
        <span className="block font-medium text-[14px] text-[#333]">{product?.category ?? "Uncategorized"}</span>
        <span className="block font-medium text-[20px] text-black">
          {product?.price > 0 ? formatToIDRCurrency(product.price) : 'Not For Sale'}
        </span>
        <div>
          {product.stock <= 0 ? (
            <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
          ) : (product.stock <= 25 && product.stock !== 0) ? (
            <>
              <p className="text-xl font-semibold text-center text-yellow-500">Almost Sold Out</p>
              <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#E63946] text-center hover:bg-[#D32F2F] text-white active:bg-[#B71C1C] mt-[28px] transition-all">
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </>
          ) : (
            <>
              <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#E63946] text-center hover:bg-[#D32F2F] text-white active:bg-[#B71C1C] mt-[28px] transition-all">
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
