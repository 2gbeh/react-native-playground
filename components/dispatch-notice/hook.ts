import { useAppDispatch } from "@/store/store.config";
import { noticeActions } from "@/store/notice/notice.slice";

export function useDispatchNotice() {
  const dispatch = useAppDispatch();

  const dispatchAlert = (title: string, message = "") => {
    let thunkAction = noticeActions.showAlert([title, message]);
    dispatch(thunkAction);
  };

  const dispatchToast = (message = "") => {
    let thunkAction = noticeActions.showToast(message);
    dispatch(thunkAction);
  };

  return { dispatchAlert, dispatchToast };
}
