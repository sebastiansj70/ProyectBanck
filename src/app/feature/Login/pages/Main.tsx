import * as React from 'react';
import { HolaMundo } from '../components/HolaMundo';
import { LoginManagmentProvider } from '../hoc/LoginManagmentProvider';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const LoginMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Login" description="Login de la aplicación">
    <LoginManagmentProvider />
  </Layout>
);

LoginMainPage.displayName = 'LoginMainPage';

export default LoginMainPage;
