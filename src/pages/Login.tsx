import { SignIn } from "@clerk/react-router";

function Login() {
  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10">
      <div className="w-full flex-center flex-col xl:flex-row gap-2 md:gap-20 md:my-10">
        <img
          className="hidden md:block w-[90%] xl:w-1/2 mt-2 xl:mt-0 mb-4 xl:mb-0 xl:max-h-120"
          src="assets/login/pic.jpg"
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
  );
}

export default Login;
