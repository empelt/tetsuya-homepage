import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

export default function Works() {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Container>
    </Layout>
  )
}
