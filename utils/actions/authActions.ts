// Converted to typescript:
import { getFirebaseApp } from "../firebaseHelper";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { child, getDatabase, ref, set, update } from "firebase/database";
import { authenticate, logout } from "../../store/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData } from "./userActions";

let timer: NodeJS.Timeout | undefined;

export const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  return async (dispatch: Function) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;
      // const accessToken = (<any>result).user.credential.accessToken;
      // const expirationTime = (<any>result).user.credential.expirationTime;
      // console.log(`accessToken: ${accessToken}`);
      // console.log(`expirationTime token: ${expirationTime}`);

      // remove to make ts work
      /*
      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;
      */

      const expiryDate = new Date(expirationTime);
      const timeNow = new Date();
      const millisecondsUntilExpiry = expiryDate.getTime() - timeNow.getTime();

      const userData = await createUser(firstName, lastName, email, uid);

      dispatch(authenticate({ token: accessToken, userData }));
      saveDataToStorage(accessToken, uid, expiryDate);

      timer = setTimeout(() => {
        dispatch(userLogout());
      }, millisecondsUntilExpiry);
    } catch (error) {
      console.log(error);
      const errorCode = error.code;

      let message: string = "Something went wrong.";

      if (errorCode === "auth/email-already-in-use") {
        message = "This email is already in use";
      }

      throw new Error(message);
    }
  };
};

export const signIn = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;

      const expiryDate = new Date(expirationTime);
      const timeNow = new Date();
      const millisecondsUntilExpiry = expiryDate.getTime() - timeNow.getTime();

      const userData = await getUserData(uid);

      dispatch(authenticate({ token: accessToken, userData }));
      saveDataToStorage(accessToken, uid, expiryDate);

      timer = setTimeout(() => {
        dispatch(userLogout());
      }, millisecondsUntilExpiry);
    } catch (error) {
      const errorCode = error.code;

      let message: string = "Something went wrong.";

      if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/user-not-found"
      ) {
        message = "The username or password was incorrect";
      }

      throw new Error(message);
    }
  };
};

export const userLogout = () => {
  return async (dispatch: Function) => {
    AsyncStorage.clear();
    if (timer) {
      clearTimeout(timer);
    }
    dispatch(logout());
  };
};

export const updateSignedInUserData = async (
  userId: string,
  newData: { [key: string]: string }
) => {
  if (newData.firstName && newData.lastName) {
    const firstLast = `${newData.firstName} ${newData.lastName}`.toLowerCase();
    newData.firstLast = firstLast;
  }

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await update(childRef, newData);
};

const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  userId: string
) => {
  const firstLast = `${firstName} ${lastName}`.toLowerCase();
  const userData = {
    firstName,
    lastName,
    firstLast,
    email,
    userId,
    signUpDate: new Date().toISOString(),
  };

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await set(childRef, userData);
  return userData;
};

const saveDataToStorage = (token: string, userId: string, expiryDate: Date) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
      expiryDate: expiryDate.toISOString(),
    })
  );
};
