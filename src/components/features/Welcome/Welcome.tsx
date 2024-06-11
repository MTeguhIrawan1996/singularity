import { Anchor, Text, Title } from '@mantine/core';

import { env } from '@/env';

export default function Welcome() {
  const fo = env.BASE_URL;
  return (
    <>
      <Title ta='center' mt='xl' bg='blue.2'>
        Welcome to {fo}
        <Text
          inherit
          variant='gradient'
          component='span'
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Mantine
        </Text>
      </Title>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        This starter Next.js project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Next.js integration
        follow{' '}
        <Anchor href='https://mantine.dev/guides/next/' size='lg'>
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
    </>
  );
}
