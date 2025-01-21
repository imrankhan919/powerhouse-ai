const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/users/userModel");

const adminProtect = expressAsyncHandler(async (req, res, next) => {
  let token;

  try {
    // Check if token is coming with request object
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Store in token variable by slicing word Bearer
      token = req.headers.authorization.split(" ")[1];
      //   Decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //   Search User in DB & Store into request object
      req.user = await User.findById(decoded.id).select("-password");
      // Proceed to next function

      if (req.user.isAdmin) {
        next();
      } else {
        res.status(401);
        throw new Error("Not Authorized || Only Admin");
      }
    } else {
      res.status(401);
      throw new Error("Not Authorized");
    }
  } catch (error) {
    res.status(401);
    throw new Error("Not Authorized");
  }
});

module.exports = adminProtect;
