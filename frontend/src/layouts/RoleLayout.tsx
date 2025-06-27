import { ReactNode, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function RoleLayout({
  allowedRoles,
  children
}: {
  allowedRoles: string[];
  children: ReactNode;
}) {
  const { user } = useContext(AuthContext);
  if (!user) return <p>Please log in</p>;
  if (!allowedRoles.includes(user.role)) return <p>Access Denied</p>;
  return <>{children}</>;
}