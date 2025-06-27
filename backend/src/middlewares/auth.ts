import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export interface AuthRequest extends Request {
  user?: { id: number; role: string };
}

export function authorize(allowedRoles: string[] = []) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ msg: 'No token' });
    const token = header.split(' ')[1];
    try {
      const payload = jwt.verify(token, config.jwt.secret) as any;
      req.user = { id: payload.id, role: payload.role };
      if (allowedRoles.length && !allowedRoles.includes(payload.role))
        return res.status(403).json({ msg: 'Forbidden' });
      next();
    } catch {
      res.status(401).json({ msg: 'Invalid token' });
    }
  };
}