import { TransactionType } from "./transaction.interface";

export class TransactionHelper {
  static constructUID(item: TransactionType) {
    let name = item.account.name.toLowerCase().replaceAll(" ", "-");
    let date = item.date
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll(":", "");
    //
    return name + "-" + date;
  }

  static constructAvatarUrl = (avatar?: string) =>
    avatar
      ? `https://github.com/2gbeh/react-native-playground/blob/pokemon/assets/uploads/${avatar}?raw=true`
      : null;
}
