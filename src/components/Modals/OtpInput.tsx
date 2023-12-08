import { Box, ChevronDownIcon, Input, InputField, Pressable, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, VStack } from "@gluestack-ui/themed";
import { Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function TransactionConfirmation({ open, close }: { open: boolean, close: any }) {
    const [accountNumber, setAccountNumber] = useState('')

    const ref = React.useRef(null);
    return (


        <Modal
            isOpen={open}
            onClose={close}
            finalFocusRef={ref}
            justifyContent="flex-end"
            mx={'$0'}
            w='$full'
            rounded={'$2xl'}
        >
            <ModalBackdrop cancelable />
            <ModalContent w={'$full'} borderTopRightRadius={30} borderTopLeftRadius={30}>
                <ModalHeader>
                    <VStack w={"$full"} alignItems="center" >

                        <Box bg='$warmGray100' my={'$2'} rounded={'$lg'} alignSelf='center' h={'$1'} w={'$12'} />
                        <Heading color="$textDark400" size='lg'>Enter 4 Digit Pin</Heading>
                        <Text color="$textDark400" size='sm'>Enter your 4 Digit PIN to authorize this transaction</Text>
                    </VStack>

                </ModalHeader>
                <ModalBody px={'$8'} mt={"$6"}>
                    <Box>
                       
                        <OtpInput
                            onTextChange={(code: string) => console.log(code)}
                            numberOfDigits={4}
                            theme={{ 
                                inputsContainerStyle: styles.inputContainer,
                                pinCodeContainerStyle: styles.pinCodeContainer
                             }}
                        />
                    </Box>

                </ModalBody>
                <ModalFooter px={'$8'} w={"$full"} mb={'$20'}>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
const styles = StyleSheet.create({
    pinCodeContainer: {
       
        height: '15%',
        width: '18%',
        borderRadius: 5,
        borderColor: '#767E80',
        backgroundColor: 'white'
    },
    inputContainer: {
       
        // backgroundColor: 'red',
    }
})
