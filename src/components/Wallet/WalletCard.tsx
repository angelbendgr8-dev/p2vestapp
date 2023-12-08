import { Box, HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { circle1, wallet } from '../../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Wallet from '../../assets/svgs/wallet.svg'
const WalletCard = () => {
    return (

        <VStack
            mx={'$4'}
            overflow='hidden'
            position='relative'
            justifyContent='space-between'
            p='$4' mt={'$6'}
            bg='$primary100'
            h={hp('26%')}
            rounded='$3xl'>
            <Box
                position='absolute'
                borderTopLeftRadius={27}
                //  source={circle1} h={'$40'} 
                w={'$48'}
                h={'$48'}
                bg='$primary0'
                //  alt='wallet'
                opacity={'$10'}
                left={-40}
                top={-25}
                rounded={'$full'}

            />
            <Box
                position='absolute'
                //  source={circle1} h={'$40'} 
                w={'$32'}
                h={'$32'}
                bg='$primary0'
                //  alt='wallet'
                opacity={'$10'}
                right={-40}
                bottom={-68}
                rounded={'$full'}

            />
            <VStack  justifyContent='space-between'>
               
                    <HStack justifyContent='space-between' alignItems='center'>
                        <Box flexDirection='row'>
                            <Text fontSize={'$lg'} fontFamily='Roboto-Normal' color='$white' pt={'$2'}>N</Text>
                                
                            <Text fontSize={'$5xl'} fontFamily='PTMono-Regular' lineHeight={'$5xl'} color='$white'>12,000</Text>

                        </Box>
                        <Wallet  height={35} width={35} />
                    </HStack>
                
                <Text ml={'$4'} fontFamily='Roboto-Normal' py={'$0'} color='$white'>Balance</Text>
            </VStack>
            <HStack justifyContent='space-between' mb={'$3'}>
                <Box>
                    <Text fontFamily='Roboto-Light' fontSize={'$sm'} color='$white'>Account Number</Text>
                    <Text fontFamily='PTMono-Regular' fontSize={'$xl'} letterSpacing={'$2xl'} color='$white'>9102356712</Text>
                </Box>
                <Box>
                    <Text fontFamily='Roboto-Light' fontSize={'$sm'} color='$white'>Bank</Text>
                    <Text fontFamily='Roboto-Regular' fontSize={'$xl'} color='$white'>Access Bank</Text>
                </Box>

            </HStack>

        </VStack>

    )
}

export default WalletCard