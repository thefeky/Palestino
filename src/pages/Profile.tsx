import { UserProfile } from "@clerk/clerk-react";

function Profile() {
  return (
    <main className="w-[90%] xl:w-[80%] mx-auto py-8 xl:py-10">
      <UserProfile
        appearance={{
          layout: { unsafe_disableDevelopmentModeWarnings: true },
          elements: { rootBox: "mx-auto!", cardBox: "w-350! h-150!" },
        }}
      />
    </main>
  );
}

export default Profile;
