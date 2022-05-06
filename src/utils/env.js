import { Platform } from "react-native";
const liveHost = "https://us-central1-pre-prod-286801.cloudfunctions.net";
const localHost = "http://localhost:5001/pre-prod-286801/us-central1";

const isAndroid = Platform.OS === "android";

export const isDevelopment = process.env.NODE_ENV === "development";

export const isMock = isDevelopment;

export const host = isDevelopment && !isAndroid ? localHost : liveHost;
