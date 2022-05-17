import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import React, { ReactNode } from 'react'

type GridItemProps = {
  children: ReactNode
  href: string
  title: string
  thumbnail: string
}
export function GridItem({ children, href, title, thumbnail }: GridItemProps) {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

type WorkGridItemProps = {
  children: ReactNode
  id: string
  title: string
  thumbnail: string
}
export function WorkGridItem({
  children,
  id,
  title,
  thumbnail
}: WorkGridItemProps) {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/works/${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export function GridItemStyle() {
  return (
    <Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
  )
}
