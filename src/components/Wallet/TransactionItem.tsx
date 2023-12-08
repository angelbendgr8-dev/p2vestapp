import { Box, HStack, Text, useToken } from '@gluestack-ui/themed'
import React, { FC } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import In from '../../assets/svgs/in.svg'
import Out from '../../assets/svgs/out.svg'
export type Transaction = {
    type: string,
    amount: string,
    date: string,
    description: string,
}
type Props = {
    item: Transaction
}
const TransactionItem: FC<Props> = ({ item: { description, type, amount, date } }) => {
    const success = useToken('colors', 'success400')
    const danger = useToken('colors', 'red700')
    return (
        <HStack justifyContent='space-between' my={'$3'} alignItems='center' >
            <HStack alignItems='center'>
                {
                    type === 'credit' ? (
                        <In height={45} />
                    ) : (
                        <Out height={45} />
                    )
                }

                <Box ml='$2'>
                    <Text fontSize={'$lg'} >
                        {description}
                    </Text>
                    <Text fontSize={'$xs'} fontFamily='Roboto-Normal' lineHeight={'$xs'}>
                        {date}
                    </Text>
                </Box>

            </HStack>
            <Text fontSize={'$lg'} fontFamily='PTMono-Regular'>{type === 'credit' ? '' : '-'}{amount}</Text>

        </HStack>
    )
}

export default TransactionItem