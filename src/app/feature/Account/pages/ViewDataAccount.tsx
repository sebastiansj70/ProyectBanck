import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { AccountDataManagmentProvider } from '../hoc/AccountDataManagmentProvider';
import { RouteComponentProps } from 'react-router-dom';

const ViewDataAccountPage: React.FC<RouteComponentProps> = () => {
  console.log('Account data');

  return (
    <Layout title="Account data" description="Account data managment">
      <AccountDataManagmentProvider />
    </Layout>
  );
};

ViewDataAccountPage.displayName = 'ViewDataAccountPage';

export default ViewDataAccountPage;
