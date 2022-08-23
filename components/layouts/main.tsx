import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Router } from 'next/router'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import dynamic from 'next/dynamic'
import Loader from '../loader'

const Model = dynamic(() => import('components/model'), {
  ssr: false,
  loading: () => <Loader />
})

interface Props {
  children: ReactNode
  router: Router
}
export default function Main({ children, router }: Props) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tetsuya's homepage" />
        <meta name="author" content="Tetsuya Kato" />
        <meta name="author" content="empelt" />
        <title>Tetsuya Kato - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Model />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}
