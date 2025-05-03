import { NavLink } from "react-router";

function Login() {
  return (
    <main className="md:w-[90%] xl:w-[80%] mx-auto py-10">
      <p className="text-black text-left relative">
        <NavLink to="/" className="text-black/50 ">
          Home
        </NavLink>{" "}
        / Login
      </p>
    </main>
  );
}

export default Login;
