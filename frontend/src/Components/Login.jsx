import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

export default function Login() {
    const [cred, setCred] = useState({});
    const navigate = useNavigate();
    const toast = useToast();
    // console.log(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCred({
            ...cred,
            [name]: value
        })
    }


    const handleLogin = async () => {
        try {
            let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cred)
            })
            let data = await res.json();
            // console.log(data);

            if (data.token) {
                localStorage.setItem("token", data.token);
                toast({
                    title: 'Login successful',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                navigate('/notes')
            } else {
                toast({
                    title: `${data.msg}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        } catch (error) {
            toast({
                description: "Something went wrong.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            console.log(error);
        }
    }

    return (
        <Flex
            // minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input onChange={handleChange} name='email' type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handleChange} name='password' type="password" />
                        </FormControl>

                        <Button
                            bg={'teal'}
                            color={'white'}
                            _hover={{
                                bg: 'teal.500',
                            }}
                            onClick={handleLogin}
                            size="lg"
                        >
                            Sign in
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}