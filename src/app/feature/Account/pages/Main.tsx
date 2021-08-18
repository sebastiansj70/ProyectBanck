import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { AccountManagmentProvider } from '../hoc/AccountManagmentProvider';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  console.log('Account');

  return (
    <Layout title="Account" description="Account managment">
      <AccountManagmentProvider />
    </Layout>
  );
};

MainPage.displayName = 'AccountMainPage';

export default MainPage;
