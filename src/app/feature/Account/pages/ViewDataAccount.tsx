import * as React from 'react';
import { AccountDataManagmentProvider } from '../hoc/AccountDataManagmentProvider';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const ViewDataAccountPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Account data" description="Account data managment">
      <AccountDataManagmentProvider />
    </Layout>
  );
};

ViewDataAccountPage.displayName = 'ViewDataAccountPage';

export default ViewDataAccountPage;
