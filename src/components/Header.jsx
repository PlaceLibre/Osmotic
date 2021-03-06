import React, { Component, Fragment } from 'react'
import { Box, Image, useToken } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import { Avatar, AvatarBadge } from "@chakra-ui/core";

//own
import { AdminIcon, HomeIcon } from './ownIcons'
import colors from './colors'



function Header () {

        const userName='Alexandra Kisscool'
        const userAvatarPath='assets/avatar01.png'
        const [color1, color2] = useToken("colors", ['brandGray.700', 'brandGray.500'])

        return (
                <Box 
                    bg={`linear-gradient(${color1}, ${color2})`}
                    display= 'flex'
                    direction='row'
                    justifyContent= 'space-between'
                    alignItems= 'center'
                    zIndex={100}
                    position="fixed"
                    top='0px'
                    left='0px'
                    right='0px'
                    boxShadow= '0 0 10px #999999'
                    height='80px'>
                        <Box
                        display= 'flex'
                        direction='row'
                        justifyContent= 'space-between'
                        alignItems= 'center'>
                            <Image
                                src="assets/LOGO_PlaceLibre_SVG_1.svg" 
                                alt="logo" 
                                height='30px'
                                marginLeft='10px'/> 
                            <Avatar
                                height='40px'
                                width='40px'
                                marginLeft= '30px'
                                name='userName'
                                src={userAvatarPath}
                                borderColor= 'white'
                                borderWidth= '1px'
                                bg={colors.brand}
                                color={colors.brandDark}/>
                            <Box 
                                marginLeft='10px'
                                color={colors.brandLight}                                >
                                    <Box fontWeight='100' >Bienvenue!</Box>
                                    <Box fontWeight='600'>{userName}</Box>
                            </Box>
                        </Box>
                        <Box
                            display='flex'
                            direction='row'
                            alignItems= 'center'
                            marginRight='1em'>
                            <AdminIcon color={colors.brandLight}  boxSize={10} margin='5px'/>
                            <HomeIcon color={colors.brandLight}  boxSize={10} margin='5px'/>
                        </Box>
                </Box>
        )
}

export default Header

