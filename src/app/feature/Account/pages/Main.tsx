import * as React from 'react';
import { AccountManagmentProvider } from '../hoc/AccountManagmentProvider';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Account" description="Account managment">
      <AccountManagmentProvider />
    </Layout>
  );
};

MainPage.displayName = 'AccountMainPage';

export default MainPage;
