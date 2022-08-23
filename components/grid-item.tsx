import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
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
  title: string
  thumbnail: string | StaticImageData
  url: string
}
export function WorkGridItem({
  children,
  title,
  thumbnail,
  url
}: WorkGridItemProps) {
  return (
    <Box w="100%" textAlign="center">
      <Link
        href={url}
        target="_blank"
      >
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Link>
    </Box>
  )
}

export function GridItemStyle() {
  return (
    <Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        border: 2px solid#EEEEEE!important
      }
    `}
    />
  )
}
