import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const token = req.header("X-Authorization");

  if (!token) {
    next();
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid user session." });
  }
}
