import User from "../models/UserModel.js";

export const login = async (req, res) => {
  //   const { email, password } = req.body;
  //   const foundUser = await User.findOne({ email });
  //   if (!foundUser) {
  //     throw console.error("User not found");
  //   }
  //   if (foundUser.password === password) {
  //     console.log("authenticated");
  //     return true;
  //   }
  res.send("login");
};

export const register = async (req, res) => {
  //User.create
  res.send("register");
};
