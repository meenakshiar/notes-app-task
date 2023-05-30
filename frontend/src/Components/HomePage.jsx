import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

const HomePage = () => {
    return (
        <Box mr='180px'>
            <Heading
                lineHeight={1.1}
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                Create your {' '}
                <br />
                <Text
                    as={'span'}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text">
                    Own
                </Text>{' '}
                Notes
                <Text
                    as={'span'}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text">
                    !
                </Text>
            </Heading>
            <Image w='100%' mt='20px' src='https://images.pexels.com/photos/3944416/pexels-photo-3944416.jpeg?auto=compress&cs=tinysrgb&w=300' />
        </Box>
    )
}

export default HomePage;