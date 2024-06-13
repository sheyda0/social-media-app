import { createClient } from "../../utils/supabase/client";

const UserProfileMenu = () => {
  async function signOut() {
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error.message);
      } else {
        console.log("Signed out successfully");
      }
    } catch (error) {
      console.error("Unexpected error signing out:", error);
    }
  }

  return <button onClick={signOut}>Sign Out</button>;
};

export default UserProfileMenu;
