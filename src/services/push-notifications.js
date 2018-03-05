import { Permissions, Notifications } from "expo";
import { AsyncStorage } from "react-native";
import axios from "axios";

const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";
const STORAGE_ITEM = "app-token";

const generateToken = async () => {
  let previousSavedToken = await AsyncStorage.getItem(STORAGE_ITEM);
  console.log(previousSavedToken);
  if (previousSavedToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(
      Permissions.REMOTE_NOTIFICATIONS
    );
    const STATUS_USER_GRANTED_PERMISSION = "granted";
    if (status !== STATUS_USER_GRANTED_PERMISSION) {
      return;
    }

    const newDeviceSpecificTokenForUser = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, {
      token: { token: newDeviceSpecificTokenForUser }
    });
    AsyncStorage.setItem(STORAGE_ITEM, newDeviceSpecificTokenForUser);
    // server backend http://rallycoding.herokuapp.com/api/tokens
  }
};

export default generateToken;
