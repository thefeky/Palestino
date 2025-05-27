import { Helmet } from "react-helmet-async";
import { UserProfile } from "@clerk/clerk-react";

function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile | Palestino</title>
        <meta
          name="description"
          content="Manage your profile settings and account preferences on Palestino."
        />
        <link rel="canonical" href="https://palestino.com/profile" />
      </Helmet>

      <main className="mx-auto w-[90%] xl:w-[80%] py-8 xl:py-10">
        <UserProfile
          path="/profile"
          appearance={{
            layout: { unsafe_disableDevelopmentModeWarnings: true },
            elements: {
              rootBox: "mx-auto!",
              cardBox: "w-350! h-150!",
            },
          }}
        />
      </main>
    </>
  );
}

export default Profile;
