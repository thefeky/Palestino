import { SignIn } from "@clerk/react-router";

function Login() {
  return (
    <>
      <title>Login | Palestino</title>
      <meta
        name="description"
        content="Sign in to your Palestino account to view orders, wishlist, and more."
      />
      <link rel="canonical" href="https://palestino.com/sign-in" />

      <main className="mx-auto w-[90%] xl:w-[80%] py-8 xl:py-10">
        <div className="w-full flex-center flex-col xl:flex-row gap-2 md:gap-20 md:my-10">
          <img
            className="hidden md:block w-[90%] xl:w-1/2 xl:max-h-120 mt-2 xl:mt-0 mb-4 xl:mb-0"
            src="assets/login/pic.jpg"
            alt="Login Visual"
            loading="lazy"
          />
          <SignIn
            appearance={{
              layout: { unsafe_disableDevelopmentModeWarnings: true },
              elements: {
                card: "shadow-none! pb-4!",
                cardBox: "shadow-none!",
                footer: "bg-none!",
                footerAction: "pt-0!",
                socialButtons: "flex! flex-row!",
              },
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Login;
