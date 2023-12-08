import { Box, ChevronDownIcon, Input, InputField, Pressable, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, VStack } from "@gluestack-ui/themed";
import { Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function AddBankModal({ open, close }: { open: boolean, close: any }) {
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
            <ModalBackdrop />
            <ModalContent w={'$full'} borderTopRightRadius={30} borderTopLeftRadius={30}>
                <ModalHeader>
                    <VStack w={"$full"} alignItems="center" >

                        <Box bg='$warmGray100' my={'$2'} rounded={'$lg'} alignSelf='center' h={'$1'} w={'$12'} />
                        <Heading color="$textDark400" size='lg'>Add New Bank</Heading>
                    </VStack>

                </ModalHeader>
                <ModalBody px={'$8'} mt={"$6"}>
                    <Box>
                        <Text color="$textDark300" my={"$1"} lineHeight="$xs">
                            Account Number
                        </Text>
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
                            borderColor='$textDark200'
                            borderBottomWidth={1}
                        >

                            <InputField
                                value={accountNumber}
                                onChangeText={setAccountNumber}
                                placeholder=""
                            />
                        </Input>

                    </Box>
                    <Box my={"$5"}>
                        <Text color="$textDark300" my={"$1"} lineHeight="$xs">
                            Bank Name
                        </Text>

                        <Select sx={{ 
                            _input: {
                                color:"$textDark300"
                            }
                         }} >
                            <SelectTrigger borderColor='$textDark200'
                                borderBottomWidth={1} variant="outline" size="xl" bg='$white' rounded={"$lg"} >
                                <SelectInput placeholder="Select option" />
                                <SelectIcon mr="$3">
                                    <AntDesign name='caretdown' color={'blac'} />
                                </SelectIcon>
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent >
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem  label="First Bank" value="first" />
                                    <SelectItem label="Access Bank" value="access" />
                                    <SelectItem
                                        label="Zenith Bank"
                                        value="zenith"
                                    />
                                    <SelectItem
                                        label="Diamond bank"
                                        value="diamont"
                                        isDisabled={true}
                                    />
                                    <SelectItem
                                        label="GTB Bank"
                                        value="gtb"
                                    />
                                </SelectContent>
                            </SelectPortal>
                        </Select>


                    </Box>
                </ModalBody>
                <ModalFooter px={'$8'} w={"$full"} mb={'$10'}>
                    <VStack w={"$full"}>
                        <Pressable onPress={close} size='lg' w={'$full'} alignSelf='center' mb={'$3'}>

                            {({ pressed }) => {
                                return (
                                    <Box alignItems='center' rounded={'$lg'} w={'$full'} py='$3' bg={pressed ? '$primary50' : '$primary100'}>

                                        <Text color={'$white'} fontSize={'$md'} fontFamily='Roboto-Medium' lineHeight={24} textTransform='capitalize'>
                                            Add bank
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
