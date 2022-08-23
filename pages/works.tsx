import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from 'components/layouts/article'
import Section from 'components/section'
import { WorkGridItem } from 'components/grid-item'

import thumbHomepage from 'public/images/homepage.png'

export default function Works() {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              title="Home Page"
              thumbnail={thumbHomepage}
              url={'https://github.com/empelt/tetsuya-homepage'}
            >
              My portfolio website using Next.js, Typescript, Chakra UI, Framer Motion, Three.js
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
