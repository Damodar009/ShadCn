'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from './button';
const getFlagEmoji = (countryCode: string) =>
  String.fromCodePoint(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );
export function LangSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" onClick={() => null}>
      {getFlagEmoji('gb')}
      <span className="sr-only">Toggle lang</span>
    </Button>
  );
}
