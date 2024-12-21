import React from "react";
import { Snackbar } from "react-native-paper";
//
import { useAppSelector } from "@/store/store.config";
import { noticeActions } from "@/store/notice/notice.slice";

const DispatchNotice: React.FC = () => {
  const { visible, as, title, message } = useAppSelector(
    (state) => state.notice
  );
  console.log("🚀 ~ DispatchNotice");
  // RENDER
  return as === "toast" ? (
    <Snackbar
      visible={visible}
      onDismiss={()=>noticeActions.dismiss}
      action={{ label: "Dismiss", onPress: () => noticeActions.dismiss() }}
    >
      {message}
    </Snackbar>
  ) : null;
};

export default React.memo(DispatchNotice);
