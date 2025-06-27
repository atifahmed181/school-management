import RoleLayout from '../../layouts/RoleLayout';

export default function AdminDashboard() {
  return (
    <RoleLayout allowedRoles={['Admin']}>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {/* add stats widgets, nav links */}
    </RoleLayout>
  );
}