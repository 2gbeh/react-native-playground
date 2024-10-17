import { useState } from "react";
import { userResource } from "@/features/user/core/user.resource";

export function usePosts() {
  const [showFormSheet, setShowFormSheet] = useState(true);

  return {
    data: userResource.getUsers.data,
    showFormSheet,
    setShowFormSheet,
  };
}
