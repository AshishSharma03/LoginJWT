import dbConnect from "../../lib/dbConnect";
import User from "../../lib/User";
import bcrypt from "bcryptjs";
import { signToken } from "../../lib/auth";

export default async function handler(req, res) {
  await dbConnect();
  const user = await User.findOne({ email: req.body.email });
  //    console.log(req.body)

      if (user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = signToken(user);
          res.send({
              token,
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
            });
            
        } else {
            res.status(401).json({ message: "Invalid user or password" });
            res.status(500).json({ message: "Internal Server Error" });
        }
    
}
