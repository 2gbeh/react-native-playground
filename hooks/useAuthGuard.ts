import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
//
import { auth } from "@/lib/firebase/firebase.config";

export function useAuthGuard() {
  // LOCAL STATES
  const [verifying, setVerifying] = useState(true);
  const [user, setUser] = useState<unknown>(null);
  // SIDE-EFFECTS
  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user: unknown) => {
      if (user) {
        setUser(user);
        setVerifying(false);
      }
    });
    return sub;
  }, []);

  return { verifying, user };
}
