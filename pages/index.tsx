import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from 'components/paragraph'
import { BioSection, BioYear } from 'components/bio'
import Layout from 'components/layouts/article'
import Section from 'components/section'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  return (
    <Layout>
      <Container maxW="container.sm">
        <Box display={{ md: 'flex' }} mt={16}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              加藤徹哉(Tetsuya Kato)
            </Heading>
            <p>Web Developer + CTO @ phatechs Inc.</p>
            <NextLink href="https://www.waseda.jp/top/" passHref>
              <Link target="_blank">Waseda University</Link>
            </NextLink>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/profile.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Paragraph>早稲田大学基幹理工学部在籍</Paragraph>
          <Paragraph>自己紹介を書く</Paragraph>
          <Paragraph>
            高校3年生の冬からテックフォワード株式会社でフロントエンド，バックエンドエンジニアとして，「Deiba」や「ミキワメ」など様々なサービスの開発に携わる。
          </Paragraph>
          <Paragraph>
            大学2年の夏から株式会社Lightblue
            TechnologyでAIエンジニアとして，セグメンテーションモデルの精度調査や，Sagemakerを用いたAI開発基盤の設計などを担当
          </Paragraph>
          <Paragraph>
            大学2年の冬からSuishow株式会社
            でフロントエンドエンジニアとして，自社サービスの「
            <NextLink href="https://app.metamart.space/ja" passHref>
              <Link target="_blank">MetaMart</Link>
            </NextLink>
            」の開発を担当。
          </Paragraph>
          <Paragraph>大学3年の春からCTO就任</Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <BioSection>
            <BioYear>Jan 2020 to Present</BioYear>
            Techforward株式会社
          </BioSection>
          <BioSection>
            <BioYear>Oct 2021 to Present</BioYear>
            株式会社Lightblue Technology
          </BioSection>
          <BioSection>
            <BioYear>Dec 2021 to Present</BioYear>
            Suishow株式会社
          </BioSection>
          <BioSection>
            <BioYear>May 2022 to Present</BioYear>
            Phatechs株式会社
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Music, Playing the Guitar, Soccer, Cooking</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/empelt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @empelt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/tetsuya_000" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @tetsuya_000
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box textAlign="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
