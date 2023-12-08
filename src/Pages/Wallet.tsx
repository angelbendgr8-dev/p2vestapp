// @ts-nocheck
import { Box, Button, ButtonText, HStack, ScrollView, Text, useToken } from '@gluestack-ui/themed'
import React from 'react'
import CustomBar from '../components/CustomBar'
import Header from '../components/Wallet/Header'
import WalletCard from '../components/Wallet/WalletCard'
import { RFValue } from 'react-native-responsive-fontsize'
import { format } from 'date-fns'
import TransactionItem, { Transaction } from '../components/Wallet/TransactionItem'
import { useNavigation } from '@react-navigation/native'
import { MainScreenNavigationProp } from '../utils/rootParams'
import Card from '../assets/svgs/card.svg'
import Topup from '../assets/svgs/Topup.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const transactions: Transaction[] = [
    {
      type: 'credit',
      description: 'Account Top Up',
      amount: '50,000',
      date: format(new Date(), 'dd MMM, yyyy h:mm a')
    },
    {
      type: 'debit',
      description: 'Rent Payment',
      amount: '10,000',
      date: format(new Date(), 'dd MMM, yyyy h:mm a')
    },
    {
      type: 'credit',
      description: 'Rent Payment',
      amount: '10,000',
      date: format(new Date(), 'dd MMM, yyyy h:mm a')
    },
]
const Wallet = () => {
  const iconColor = useToken('colors','primary100')
  const {navigate} = useNavigation<MainScreenNavigationProp>()
  return (
    <Box flex={1}  bg='$white' pt={'$4'} >
      <CustomBar backgroundColor='white' barStyle='dark-content' />
      <Header />
      <WalletCard />
      <HStack mx={'$4'} gap={'$8'} flexDirection='row'>
        <Button w={wp('42%')}  justifyContent='center' size='xl' alignItems='center' variant='outline' bg='$primary0' borderColor='$primary0' rounded={'$lg'}  alignSelf='center' my={24}>
          <Topup width={20} height={20} />
          <ButtonText  textAlign='center' color='$textDark50' pl={'$2'} fontSize={'$md'} fontFamily='Roboto-Normal' lineHeight={24} textTransform='capitalize'>
            Top Up wallet
          </ButtonText>

        </Button>
        <Button w={wp('42%')}  onPress={()=> navigate('Withdrawal')} px={'$0'}  bg='$primary0' size='xl' borderColor='$primary0' variant='outline' rounded={'$lg'}  alignSelf='center' my={24}>
          <Card   width={20} height={20} />
          <ButtonText  textAlign='center'  color='$textDark50'  pl={'$1'} borderColor='$gray' fontSize={'$md'} fontFamily='Roboto-Normal' lineHeight={24} textTransform='capitalize'>
            Withdraw Funds
          </ButtonText>

        </Button>
      </HStack>
      <Box bg='$warmGray50' px={'$4'} flex={1} borderTopRightRadius={30} borderTopLeftRadius={30}>
        <Box bg='$warmGray100' my={'$4'} rounded={'$lg'} alignSelf='center' h={'$1'} w={'$12'}/>
        <HStack justifyContent='space-between'>
          <Text  color='$textDark50'  pl={'$1'} borderColor='$gray' fontSize={RFValue(16)} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>Last Transactions</Text>
          <Text  color='$primary100'  pl={'$1'} borderColor='$gray' fontSize={RFValue(16)} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>See All</Text>
        </HStack>
        <ScrollView>
          {
            transactions.map((item,index)=> (
              <TransactionItem key={index} item={item}/>
            ))
          }
        </ScrollView>
      </Box>
    </Box>
  )
}

export default Wallet