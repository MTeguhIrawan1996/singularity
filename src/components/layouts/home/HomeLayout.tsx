'use client';

import { AppShell, Container, Group, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import * as React from 'react';

import { InternatinoalizationButton, ThemeButton } from '@/components/elements';

type IHomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: IHomeLayoutProps) => {
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Group gap='xs'>
              <MantineLogo size={30} type='mark' color='blue' />
              <Text
                size='xl'
                fw={900}
                component='span'
                variant='gradient'
                gradient={{ from: 'gray', to: 'blue', deg: 360 }}
              >
                OneMovie
              </Text>
            </Group>
            <Group ml='xl' gap='sm'>
              <ThemeButton />
              <InternatinoalizationButton />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Container bg='blue' size='lg' pos='relative'>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
