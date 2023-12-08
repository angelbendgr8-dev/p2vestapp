import { BellIcon, Box, Button, ButtonIcon, HStack, Image, Text, useTheme, useToken } from '@gluestack-ui/themed'
import React from 'react'
import { profile } from '../../assets'
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from '../../assets/svgs/bell.svg'
const Header = () => {
    const iconColor = useToken('colors','primary100')
    
    return (
        <HStack justifyContent='space-between' px={'$4'} alignItems='center' >
            <HStack alignItems='center'>
                <Image alt='profile' borderWidth={1} borderColor='$primary100' rounded={'$full'} h={'$10'} w={'$10'} source={profile} />
                <Text fontSize={'$xl'} fontFamily='Roboto-Bold' fontWeight='700' ml='$2'>Ajalla Ugo</Text>
            </HStack>

            <Button borderRadius='$md' size='lg' px='$3' py={'$2'} bg='$primary0' borderColor='$primary0' >
                {/* EditIcon is imported from 'lucide-react-native' */}
                <Bell   />
            </Button>

        </HStack>
    )
}

export default Header