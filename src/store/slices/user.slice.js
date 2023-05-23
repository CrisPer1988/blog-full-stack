import { createSlice } from "@reduxjs/toolkit";
import blogApi from "../../api/blog";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const loginThunk = (data) => (dispatch) => {
  //blogApi
  axios
    .post("https://blog-web-psus.onrender.com/api/v1/auth/login", data)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const registerThunk = (formData) => (dispatch) => {
  blogApi
    .post("/auth/signup", formData)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const renewThunk = () => (dispatch) => {
  blogApi
    .get("/auth/renew")
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log(err);
    });
};
