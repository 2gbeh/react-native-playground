import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
//
import { auth } from "@/lib/firebase/firebase.config";
import { UserEntity } from "@/store/auth/auth.interface";

export function useAuthGuard() {
  // LOCAL STATES
  const [verifying, setVerifying] = useState(true);
  const [user, setUser] = useState<UserEntity>(null);
  // SIDE-EFFECTS
  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user: UserEntity) => {
      if (user) setUser(user);
      setVerifying(false);
    });
    return sub;
  }, []);

  return { verifying, user };
}