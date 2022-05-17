import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Router } from 'next/router'
import Navbar from 'components/navbar'

interface Props {
  children: ReactNode
  router: Router
}
export default function Main({ children, router }: Props) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tetsuya Kato</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
