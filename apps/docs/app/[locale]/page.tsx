import { useTranslations } from 'next-intl';
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <h1>{t('title')}</h1>
    </div>
  );
}
