import { Box, HStack, Pressable, Text } from '@gluestack-ui/themed'
import React, { FC } from 'react'

type Props = {
    item: any;
    isActive?: boolean;
    select: any
}
const AccountCard: FC<Props> = ({ item, isActive = false, select }) => {

    return (
        <Pressable onPress={() => select(item.id)}>
            {({ pressed }) => {
                return (
                    <HStack alignItems='center' py={'$6'} px={'$6'} mb={'$3'} rounded={'$lg'} gap={'$2'} bg={!isActive ? '$warmGray50' : '$primary0'}>
                        <Box mr='$2' borderWidth={1} p={'$1'} borderColor={isActive ? '$primary100' : '$textDark200'} rounded={'$full'} w={'$4'} h={'$4'}>
                            <Box bg={isActive ? '$primary100' : '$transparent'} rounded={'$full'} w={'$full'} h={'$full'}></Box>
                        </Box>
                        <HStack flex={1} justifyContent='space-between' >
                            <Box>
                                <Text fontFamily='Roboto-Medium' fontSize={'$lg'} color='$textDark300'>{item.name}</Text>
                                <Text fontFamily='PTMono-Regular'  fontSize={'$xs'} letterSpacing={'$sm'} color='$textDark200'>{item.account_number}</Text>
                            </Box>
                            <Box>
                                <Text fontFamily='Roboto-Regular' fontSize={'$sm'} color='$textDark300'>Bank</Text>
                                <Text fontFamily='Roboto-Normal' fontSize={'$sm'} letterSpacing={'$sm'} color='$textDark200'>{item.bank_name}</Text>
                            </Box>

                        </HStack>
                    </HStack>
                )
            }}
        </Pressable>

    )
}

export default AccountCard