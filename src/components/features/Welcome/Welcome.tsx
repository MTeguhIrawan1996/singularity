'use client';

import {
  Anchor,
  Button,
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

export default function Welcome() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Stack align='center'>
      <Title ta='center' mt='xl' bg='primary'>
        Welcome to{' '}
        <Text
          inherit
          variant='gradient'
          component='span'
          gradient={{ from: 'red', to: 'blue' }}
        >
          Mantine
        </Text>
      </Title>
      <Title ta='center' order={1}>
        Title H1
      </Title>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button>Primary button</Button>
      <Button variant='gradient'>Button with custom default gradient</Button>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        This starter Next.js project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Next.js integration
        follow{' '}
        <Anchor href='https://mantine.dev/guides/next/' size='lg'>
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>

      <Group>
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
      </Group>
    </Stack>
  );
}
