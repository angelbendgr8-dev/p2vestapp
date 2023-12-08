// @ts-nocheck
import { Box, Button, HStack, Image, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, Pressable, Spinner, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { background } from '../assets';
import { Platform, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';
import User from '../assets/svgs/users.svg';
import Key from '../assets/svgs/key.svg';
import Banner from '../assets/svgs/Loginbanner.svg';


import * as Yup from 'yup';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';

const LoginSchema = Yup.object().shape({
    username: Yup.string()

        .required('Username is required'),
    password: Yup.string()
        .min(2, 'Password is too short!')
        .max(16, 'password is too Long!')
        .required('Password is required'),
});
// @ts-nocheck
const Login = () => {
    const [email, setEmail] = useState('');
    const { height, width } = useWindowDimensions()
    const [loading, setLoading] = useState(false);

    const { navigate } = useNavigation<MainScreenNavigationProp>()

    const onSubmit = (values: any) => {
        setLoading(true)
        setTimeout(() => {
            navigate('Wallet')
        }, 5000);
    }
    return (
        <Box flex={1} bg={'$primary0'} position='relative'  >
            {/* <CustomBar barStyle='dark-content'  backgroundColor={'#E5F4F3'} /> */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <VStack   >
                    <Image
                        w={wp('100%')}
                        h={'$full'}
                        alt={'Image background'}
                        position='absolute'
                        source={background}

                        style={{ flex: 1, height: height - 10, width: width }}
                        opacity={0.6}
                    />

                    <Box alignItems='center' mt={'$20'}   >
                        <Banner height={hp('18%')} width={wp('78%')} />
                    </Box>

                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={values => onSubmit(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <Box px={'$12'} >
                                <Text my={'$6'} fontSize={'$xl'} fontFamily='Roboto-Medium'>Login to your Account</Text>
                                <Box>
                                    <Input
                                        variant="outline"
                                        w='$full'
                                        size="xl"
                                        px={'$4'}
                                        bg={'$white'}
                                        isDisabled={false}
                                        isInvalid={false}
                                        rounded={'$lg'}
                                        isReadOnly={false}
                                        borderColor='white'
                                        borderBottomWidth={1}
                                    >
                                        <InputSlot px={2}>
                                            <InputIcon><User height={24} width={24} /></InputIcon>
                                        </InputSlot>
                                        <InputField
                                            value={values.username}

                                            onBlur={handleBlur('username')}

                                            onChangeText={handleChange('username')}
                                            placeholder="username"
                                        />
                                    </Input>
                                    {errors.username && touched.username ? (
                                        <Text color='$red500' fontFamily='Roboto-Light' my={'$1.5'}>{errors.username}</Text>
                                    ) : null}

                                </Box>
                                <Box my={'$5'}>
                                <Input
                                        variant="outline"
                                        w='$full'
                                        size="xl"
                                        px={'$4'}
                                        bg={'$white'}
                                        isDisabled={false}
                                        isInvalid={false}
                                        rounded={'$lg'}
                                        isReadOnly={false}
                                        borderColor='white'
                                        borderBottomWidth={1}
                                    >
                                        <InputSlot px={2}>
                                            <InputIcon><User height={24} width={24} /></InputIcon>
                                        </InputSlot>
                                        <InputField
                                            value={values.password}

                                            onBlur={handleBlur('password')}

                                            onChangeText={handleChange('password')}
                                            placeholder="Password"
                                        />
                                    </Input>

                                    {errors.password && touched.password ? (
                                        <Text color='$red500' fontFamily='Roboto-Light' my={'$1.5'}>{errors.password}</Text>
                                    ) : null}

                                </Box>

                                <Pressable onPress={() => handleSubmit()} size='xl' w={'$full'} alignSelf='center' my={6}>
                                    {({ pressed }) => {
                                        return (
                                            <Box alignItems='center' rounded={'$lg'} w={'$full'} py='$4' bg={pressed ? '$primary50' : '$primary100'}>
                                                {
                                                    loading ? (
                                                        <Spinner size="small" color={'$white'} />
                                                    ) : (
                                                        <Text color={'$white'} fontSize={RFValue(18)} fontFamily='Roboto-Normal' lineHeight={24} textTransform='capitalize'>
                                                            Sign In
                                                        </Text>

                                                    )
                                                }
                                            </Box>

                                        )
                                    }}
                                </Pressable>
                            </Box>
                        )}
                    </Formik>





                </VStack>
            </KeyboardAvoidingView>
            <HStack position='absolute' left={'20%'} bottom={60} flexDirection='row' justifyContent='center' alignItems='center'>

                <Text color='$gray' fontSize={'$xl'} lineHeight={24} >Don't have an account?</Text>
                <Button variant='link' sx={{ _text: { color: 'black', fontSize: 12 } }} >
                    <Text pl='$2' color='$primary100' fontSize={'$xl'} >Sign up</Text>
                </Button>

            </HStack>
        </Box>
    )
}

export default Login