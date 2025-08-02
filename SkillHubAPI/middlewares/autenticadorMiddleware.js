import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config();
const chaveJWT = process.env.JWT_KEY

export function autenticadorMiddleware(req, res, next){
    const authHeader = req.headers['authorization'];    
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
  }
    jwt.verify(token, chaveJWT, (err, payload) => {
    if (err) {
        return res.status(403).json({ message: 'Token inválido ou expirado' });
    }
    req.user = payload;
    next();
  });
}