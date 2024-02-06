'use client';
import { useLocale } from 'next-intl';
import * as React from 'react';

import { Button } from './button';
const getFlagEmoji = (countryCode: string) =>
  String.fromCodePoint(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );
const LangSwitcher = () => {
  const [_, startTransition] = React.useTransition();
  const locale = useLocale();

  const onLanguageChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
     // router.replace(pathname, { locale: nextLocale });
    });
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => onLanguageChange(locale === 'en' ? 'ja' : 'en')}
    >
      {getFlagEmoji(locale === 'en' ? 'jp' : 'us')}
      <span className="sr-only">Toggle lang</span>
    </Button>
  );
};
export { LangSwitcher };
