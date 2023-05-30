import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteRequest, GetRequest, PostRequest, UpdateRequest } from '../Redux/action';
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardHeader, Flex, Grid, Heading, IconButton, Input, Stack, StackDivider, Text, Textarea } from '@chakra-ui/react';

const Notes = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const data = useSelector((store) => store.Reducer.notes);
    // console.log(data, 'store');
    const dispatch = useDispatch();
    const [notesData, setNotesData] = useState({ title: '', description: '' });
    const [id, setId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNotesData({ ...notesData, [name]: value });
    }
    // console.log(notesData);


    const getData = () => {
        dispatch(GetRequest());
    }
    const handleSave = () => {
        if (notesData.title === '' || notesData.description === '') {
            return alert('Please Fill Up All Fields');
        }
        dispatch(PostRequest(notesData));
        // getData()
        // window.location.reload();
    }

    const handleEdit = (item) => {
        // console.log(item);
        setId(item._id)
        setNotesData({ title: item.title, description: item.description })
    }

    const handleSaveEdits = () => {
        dispatch(UpdateRequest(id, notesData));
        getData()
    }

    const handleDelete = (id) => {
        dispatch(DeleteRequest(id));
        // getData()
        // window.location.reload();
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    useEffect(() => {
        getData();
        if (!token) {
            return navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Flex gap={'100px'} bgColor={'#e8f0fe'} p='50px' flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}>
            <Card w='600px'>
                <CardHeader>
                    <Heading size='md'>Notes</Heading>
                </CardHeader>

                <CardBody >
                    <Stack divider={<StackDivider />} spacing='4'>
                        {
                            !data?.length ?
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text"
                                    fontSize={'25px'}
                                >
                                    No notes created yet!
                                </Text>
                                :
                                data?.map((item, index) => {
                                    return <Box>
                                        <Flex mt='2' gap={'2'} justifyContent={'space-between'}>
                                            <Heading size='xs' textTransform='uppercase'>
                                                {item.title}
                                            </Heading>
                                            <Flex gap={'20px'}>
                                                <IconButton onClick={() => handleEdit(item)} colorScheme='teal' size='xs' w='20px' icon={<EditIcon />} right={'0'} />
                                                <IconButton colorScheme='teal' size='xs' w='20px' icon={<DeleteIcon />} right={'0'} onClick={() => handleDelete(item._id)} />
                                            </Flex>
                                        </Flex>
                                        <Text pt='2' fontSize='sm'>
                                            {item.description}
                                        </Text>
                                    </Box>
                                })
                        }
                    </Stack>
                </CardBody>
            </Card>


            <Grid gap={'20px'} >
                <Flex justifyContent={'space-between'}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Create {' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            Notes!
                        </Text>{' '}
                    </Heading>
                    <Button
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: "linear(to-r, red.300,pink.300)"
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Flex>

                <Input focusBorderColor='black' placeholder='Title' size='lg' w='1000px' name='title' value={notesData.title} onChange={handleChange} />
                <Flex gap={'20px'} justifyContent={'space-between'}>
                    <Flex gap={'20px'}>
                        <IconButton onClick={handleSave} colorScheme='teal' size='md' w='20px' icon={<CheckIcon />} right={'0'} />
                        <IconButton onClick={() => setNotesData({ title: '', description: '' })} colorScheme='teal' size='md' w='20px' icon={<CloseIcon />} right={'0'} />
                    </Flex>
                    <Button
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: "linear(to-r, red.300,pink.300)"
                        }}
                        onClick={handleSaveEdits}
                    >
                        Save your Edits
                    </Button>
                </Flex>
                <Textarea focusBorderColor='black' placeholder='Write here' h='500px' name='description' value={notesData.description} onChange={handleChange} />
            </Grid>
        </Flex>
    )

}

export default Notes;