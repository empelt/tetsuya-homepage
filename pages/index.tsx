import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from 'components/paragraph'
import { ExpSection, ExpTitle, ExpText, ExpCard } from 'components/experience'
import Layout from 'components/layouts/article'
import Section from 'components/section'
import { IoLogoGithub, IoMailOutline } from 'react-icons/io5'
import { SiQiita } from 'react-icons/si'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  const bg = useColorModeValue('#F4FBFE', '#343a40')
  return (
    <Layout>
      <Container maxW="container.sm">
        <Box display={{ md: 'flex' }} mt={16}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              加藤徹哉(Tetsuya Kato)
            </Heading>
            <p>Fullstack Developer + CTO @ phatechs Inc.</p>
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
          <Paragraph>
            早稲田大学基幹理工学部情報通信学科在籍。高校2年生のときに競技プログラミング「AtCoder」にハマりバソコン甲子園などに出場する。高校の卒論は「プログラミング教育における競技プログラミングの活用」というテーマで執筆。高校3年生の冬からテックフォワード株式会社でフロントエンド，バックエンドエンジニアとして，「Deiba」や「ミキワメ」など様々なサービスの開発に携わる。大学2年の夏から株式会社Lightblue
            TechnologyでAIエンジニアとして，セグメンテーションモデルの精度調査や,Sagemakerを用いたAI開発基盤の設計などを担当。大学2年の冬からSuishow株式会社でフロントエンドエンジニアとして，自社サービスの「
            <NextLink href="https://app.metamart.space/ja" passHref>
              <Link target="_blank">MetaMart</Link>
            </NextLink>
            」の開発を担当。大学3年の春にPhatecHs株式会社を共同創業し，CTOに就任。自社サービスとしてスマホアプリの開発を行う。
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <ExpSection>
            <ExpCard bg={bg} boxShadow="md">
              <ExpTitle>Techforward株式会社</ExpTitle>
              <Text>Jan 2020 to Present</Text>
              <ExpText>
                ・「Deiba」，「ミキワメ」などの大規模サービスのフロントエンド，バックエンド開発
              </ExpText>
              <ExpText>
                ・受託開発でスピード感のある新規サービス開発の経験を積む
              </ExpText>
            </ExpCard>
          </ExpSection>
          <ExpSection>
            <ExpCard bg={bg} boxShadow="md">
              <ExpTitle>株式会社Lightblue Technology</ExpTitle>
              <Text>Oct 2021 to Present</Text>
              <ExpText>・セグメンテーションモデルの精度調査</ExpText>
              <ExpText>・Sagemakerを用いたAI開発基盤の設計</ExpText>
              <ExpText>・BERTによる文書分類モデルの開発</ExpText>
            </ExpCard>
          </ExpSection>
          <ExpSection>
            <ExpCard bg={bg} boxShadow="md">
              <ExpTitle>Suishow株式会社</ExpTitle>
              <Text>Dec 2021 to Present</Text>
              <ExpText>
                ・自社サービス「MetaMart」のフロントエンドの開発
              </ExpText>
              <ExpText>
                ・チーム開発の経験を積む
              </ExpText>
            </ExpCard>
          </ExpSection>
          <ExpSection>
            <ExpCard bg={bg} boxShadow="md">
              <ExpTitle>PhatecHs株式会社</ExpTitle>
              <Text>May 2022 to Present</Text>
              <ExpText>
                ・自社サービスのスマホアプリ開発
              </ExpText>
            </ExpCard>
          </ExpSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobby
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
              <Link href="https://qiita.com/empelt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<SiQiita />}
                >
                  @empelt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:tetsuya.kato1009@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMailOutline />}
                >
                  tetsuya.kato1009@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
