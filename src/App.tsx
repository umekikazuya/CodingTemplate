import MainLayout from '@/components/components/Layout/MainLayout';
import './index.css';
import {Outlet} from 'react-router';

export default function Index() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
