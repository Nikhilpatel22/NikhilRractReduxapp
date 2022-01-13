import React from "react";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f0102d9399434f3ebae07c35b5df2a79"
const token = "006f0102d9399434f3ebae07c35b5df2a79IABtD/rGK0Loi222tRdKc6QAXJPRLZ8OE2sa/41PWnJ31GTNKL8AAAAAEADri2/QkVDBYQEAAQCQUMFh"

export const config = {mode: "rtc", codec: "vp8", appId: appId ,token:token};

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName ="main"