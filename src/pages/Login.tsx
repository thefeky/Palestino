import { NavLink } from "react-router";

function Login() {
  return (
    <main className="md:w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10 top-0 left-0">
      <p className="text-black">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>{" "}
        / Login
      </p>
    </main>
  );
}

export default Login;
