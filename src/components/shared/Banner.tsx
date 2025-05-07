import { NavLink } from "react-router";

const Banner = () => {
  return (
    <p className="hidden md:flex-center bg-red-500 h-8 text-white z-60">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <NavLink to="/" className="font-semibold underline ml-2">
        ShopNow
      </NavLink>
    </p>
  );
};

export default Banner;
