import { Box, Button, ButtonText, VStack, Text, Input, InputField, Pressable, ButtonIcon, useToken } from '@gluestack-ui/themed'
import React, { useState } from 'react'
import CustomBar from '../components/CustomBar'
import Header from '../components/Wallet/Header'
import { RFValue } from 'react-native-responsive-fontsize'
import { HStack } from '@gluestack-ui/themed'
import AntDesign from 'react-native-vector-icons/AntDesign';
import AccountCard from '../components/Withdrawal/AccountCard'
import WithdrawalModal from '../components/Modals/WithdrawalModal'
import AddBankModal from '../components/Modals/AddBankModal'
import OtpInput from '../components/Modals/OtpInput'
import TransactionConfirmation from '../components/Modals/OtpInput'


const Accounts = [
  {
    id: 1,
    name: 'Ajalla Ugo',
    account_number: '9102356712',
    bank_name: 'Access Bank'
  },
  {
    id: 2,
    name: 'Ajalla Ugo',
    account_number: '1404040987',
    bank_name: 'First Bank'
  },
];
const Withdrawal = () => {
  const [amount, setAmount] = useState('')
  const primary100 = useToken('colors', 'primary100')
  const [selected, setSelected] = useState(1)

  const [showModal, setShowModal] = useState(false);
  const [bankModal, setBankModal] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const confirmTransaction = () => {
    setShowModal(false);
    setShowOtpInput(true);
  }

  const selectAccount = (id: any) => {
    setSelected(id);
  }
  return (
    <Box flex={1} bg='$white' pt={'$4'} >
      <CustomBar backgroundColor='white' barStyle='dark-content' />
      <Header />
      <VStack mx={'$4'}  >
        <HStack my={'$4'} alignItems='center' justifyContent='space-between'>
          <Text>Your Balance</Text>
          <HStack alignItems='flex-start'>
            <Text fontSize={'$sm'} fontFamily='Roboto-Normal' color='$textDark100' pt={'$3'}>N</Text>
            <Box>
              <Text fontSize={'$3xl'} fontFamily='PTMono-Regular' lineHeight={'$5xl'} color='$textDark100'>120,000</Text>

              <Text color='$white'>Balance</Text>
            </Box>
          </HStack>
        </HStack>
        <Text color='$primary100' fontSize={'$2xl'} fontFamily='Roboto-Bold' lineHeight={24} textTransform='capitalize'>Withdraw</Text>
        <Text color='$textDark200' fontSize={'$md'} my={'$1'} fontFamily='Roboto-Bold' lineHeight={24} textTransform='capitalize'>amount</Text>
        <Box >
          <Input
            variant="outline"
            w='$full'
            size="xl"
            px={'$4'}
            bg={'$primary0'}
            isDisabled={false}
            isInvalid={false}
            rounded={'$lg'}
            isReadOnly={false}
            borderColor='$primary100'
            borderBottomWidth={1}
          >

            <InputField
              value={amount}
              onChangeText={setAmount}
              textAlign='center'
              fontFamily='PTMono-Regular'
              placeholder="Enter Amount"
            />

          </Input>

        </Box>

        <HStack my={'$2'} justifyContent='space-between' alignItems='center'>
          <Text color='$textDark200' fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>Select Bank</Text>
          <Button
            size="md"
            variant="link"
            action="primary"
            alignItems='center'
            onPress={() => setBankModal(true)}
            isDisabled={false}
            isFocusVisible={false}
          >

            <AntDesign name='pluscircleo' color={primary100} size={12} />
            <ButtonText ml='$1' color='$textDark200' fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize' >Add New Bank </ButtonText>
          </Button>
        </HStack>

        {
          Accounts.map((item, index) => (
            <AccountCard select={selectAccount} isActive={selected == item.id} item={item} key={index} />
          ))
        }

        <Pressable onPress={() => setShowModal(true)} size='lg' w={'$full'} alignSelf='center' my={'$3'}>

          {({ pressed }) => {
            return (
              <Box alignItems='center' rounded={'$lg'} w={'$full'} py='$3' bg={pressed ? '$primary50' : '$primary100'}>

                <Text color={'$white'} fontSize={'$lg'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>
                  Withdraw
                </Text>
              </Box>

            )
          }}
        </Pressable>
        <Pressable onPress={() => { }} size='xl' w={'$full'} alignSelf='center' >
          {({ pressed }) => {
            return (
              <Box alignItems='center' rounded={'$lg'} w={'$full'} py='$3' bg={pressed ? '$warmGray100' : '$warmGray100'}>

                <Text color={'$white'} fontSize={'$lg'} fontFamily='Roboto-Regular' lineHeight={24} textTransform='capitalize'>
                  Cancel
                </Text>
              </Box>

            )
          }}
        </Pressable>
        <WithdrawalModal open={showModal} close={confirmTransaction} />
        <AddBankModal open={bankModal} close={() => setBankModal(false)} />
        <TransactionConfirmation open={showOtpInput} close={() => setShowOtpInput(false)} />
      </VStack>

    </Box>
  )
}

export default Withdrawal