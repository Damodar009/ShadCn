import * as React from 'react';
import { HeaderNavbar } from '../../containers/header';
import { Sidebar } from '../../containers/sidebar';
import { useTranslations } from 'next-intl';
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div className="bg-background">
      <HeaderNavbar />
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
          <Sidebar />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <h1>{t('title')}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
