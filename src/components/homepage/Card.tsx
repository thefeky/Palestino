import { NavLink } from "react-router";

interface CardProps {
  productName: string;
  productImage: string;
  promotion: number;
  featured?: boolean;
  productPrice: number;
  rating: number;
}

function Card({
  productName,
  productImage,
  promotion,
  featured,
  productPrice,
  rating,
}: CardProps) {
  const priceAfterPromotion = +(
    productPrice -
    (productPrice * promotion) / 100
  ).toFixed(2);

  return (
    <div className="relative m-auto flex w-[90%] md:w-full max-w-xs flex-col overflow-hidden rounded-lg border border-red-500 bg-white duration-500 ease-in-out xl:hover:scale-105 hover:shadow-md hover:shadow-gray-500">
      <NavLink
        className="relative mx-3 mt-3 flex-center h-50 w-auto overflow-hidden rounded-xl"
        to="/"
      >
        <img className="h-40" src={productImage} alt="product image" />
        {featured ? (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {promotion}% OFF
          </span>
        ) : null}
      </NavLink>
      <div className="mt-4 px-5 pb-5">
        <NavLink to="/">
          <h5 className="text-xl tracking-tight text-slate-900">
            {productName}
          </h5>
        </NavLink>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 mr-1 xl:mr-3">
              ${priceAfterPromotion}
            </span>
            {featured ? (
              <span className="text-sm text-slate-900 line-through">
                ${productPrice}
              </span>
            ) : null}
          </p>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id={`half-star-${star}`}
                    x1="0"
                    x2="100%"
                    y1="0"
                    y2="0"
                  >
                    <stop offset="50%" stopColor="#ffd700" />
                    <stop offset="50%" stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill={
                    rating >= star
                      ? "#ffd700" // Full star
                      : rating >= star - 0.5
                      ? `url(#half-star-${star})` // Half star
                      : "#e5e7eb" // Empty star
                  }
                />
              </svg>
            ))}
          </div>
        </div>
        <NavLink
          to="/"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
