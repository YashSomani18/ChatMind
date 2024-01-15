import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
export const verifyToken = (req, res, next) => {
    console.log('Cookies:', req.cookies);
    console.log('Signed Cookies:', req.signedCookies);
    const token = req.signedCookies[COOKIE_NAME];
    if (!token) {
        console.log('Token not found in cookies.');
        return res.status(401).json({ message: "Token Not Received" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('Token verification failed:', err);
            return res.status(401).json({ message: "Token Invalid or Expired" });
        }
        console.log('Token verified:', decoded);
        res.locals.jwtData = decoded;
        next();
    });
};
//# sourceMappingURL=token-manager.js.map