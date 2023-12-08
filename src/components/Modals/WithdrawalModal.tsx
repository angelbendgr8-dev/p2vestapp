import { Box, HStack, Pressable, VStack } from "@gluestack-ui/themed";
import { Button, ButtonText, Center, CloseIcon, Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text } from "@gluestack-ui/themed";
import React from "react";

export default function WithdrawalModal({ open, close }: { open: boolean, close: any }) {

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
            <ModalBackdrop />
            <ModalContent w={'$full'} borderTopRightRadius={30} borderTopLeftRadius={30}>
                <ModalHeader>
                    <VStack w={"$full"} alignItems="center" >

                        <Box bg='$warmGray100' my={'$2'} rounded={'$lg'} alignSelf='center' h={'$1'} w={'$12'} />
                        <Heading color="$textDark400" size='lg'>Transaction Summary</Heading>
                        <Text color="$textDark400" size='sm'>Please Review the details of your transaction</Text>
                    </VStack>

                </ModalHeader>
                <ModalBody px={'$8'} mt={"$6"}>
                    <HStack py={'$2'} borderBottomWidth={1} borderBottomColor='$warmGray200' justifyContent='space-between' alignItems='center'>
                        <Text color='$textDark300' fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>Transaction Type</Text>
                        <Text ml='$1' color='$textDark500' fontSize={'$lg'} fontFamily='Roboto-Bold' lineHeight={24} textTransform='capitalize' >Wallet Withdrawal </Text>
                    </HStack>
                    <HStack py={'$2'} borderBottomWidth={1} borderBottomColor='$warmGray200' justifyContent='space-between' alignItems='center'>
                        <Text color='$textDark300' fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>Amount</Text>
                        <Text ml='$1' color='$textDark500' fontSize={'$lg'} fontFamily='Roboto-Bold' lineHeight={24} textTransform='capitalize' >50,000 </Text>
                    </HStack>
                    <HStack py={'$2'} borderBottomWidth={1} borderBottomColor='$warmGray200' justifyContent='space-between' alignItems='center'>
                        <Text color='$textDark300' fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>Fee</Text>
                        <Text ml='$1' color='$textDark500' fontSize={'$lg'} fontFamily='Roboto-Bold' lineHeight={24} textTransform='capitalize' >25 </Text>
                    </HStack>
                    <HStack py={'$2'} justifyContent='space-between' alignItems='center'>
                        <Text color='$textDark300' fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'></Text>
                        <Text ml='$1' color='$textDark500' fontSize={'$lg'} fontFamily='Roboto-Bold' lineHeight={24} textTransform='capitalize' >50,025 </Text>
                    </HStack>
                </ModalBody>
                <ModalFooter  px={'$8'} w={"$full"}  mb={'$10'}>
                    <VStack w={"$full"}>
                        <Pressable onPress={close} size='lg' w={'$full'} alignSelf='center' mb={'$3'}>

                            {({ pressed }) => {
                                return (
                                    <Box alignItems='center' rounded={'$lg'} w={'$full'} py='$3' bg={pressed ? '$primary50' : '$primary100'}>

                                        <Text color={'$white'} fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>
                                            Continue
                                        </Text>
                                    </Box>

                                )
                            }}
                        </Pressable>
                        <Pressable onPress={close} size='xl' w={'$full'} alignSelf='center' >
                            {({ pressed }) => {
                                return (
                                    <Box alignItems='center' rounded={'$lg'} w={'$full'} py='$3' bg={pressed ? '$warmGray100' : '$warmGray100'}>

                                        <Text color={'$white'} fontSize={'$md'} fontFamily='Roboto-Regular' lineHeight={24} textTransform='capitalize'>
                                            Cancel
                                        </Text>
                                    </Box>

                                )
                            }}
                        </Pressable>
                    </VStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
