import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React, { ReactNode } from 'react'

type TitleProps = {
  children: ReactNode
}
export function Title({ children }: TitleProps) {
  return (
    <Box>
      <NextLink href="/works" passHref>
        <Link>Works</Link>
      </NextLink>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

type WorkImageProps = {
  src: string
  alt: string
}
export function WorkImage({ src, alt }: WorkImageProps) {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

type MetaProps = {
  children: ReactNode
}
export function Meta({ children }: MetaProps) {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )
}
