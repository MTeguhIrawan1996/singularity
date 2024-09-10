import { rem, Switch, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import * as React from 'react';

export function ThemeButton() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const sunIcon = (
    <IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  const moonIcon = (
    <IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  const handleSetTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorScheme(e.currentTarget.checked ? 'dark' : 'light');
  };

  return (
    <Switch
      checked={colorScheme === 'dark'}
      size="md"
      color="blue.6"
      onLabel={moonIcon}
      offLabel={sunIcon}
      onChange={handleSetTheme}
    />
  );
}
