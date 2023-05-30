import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center } from '@chakra-ui/react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import HomePage from '../Components/HomePage';


const LoginSignUpPage = () => {
    return (
        <Box>
            <Center>
                <HomePage />
                <Tabs variant='soft-rounded' colorScheme='green' mt='50px'>
                    <Center>
                        <TabList>
                            <Tab>Login</Tab>
                            <Tab>Signup</Tab>
                        </TabList>
                    </Center>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Center>
        </Box>
    )
}

export default LoginSignUpPage;