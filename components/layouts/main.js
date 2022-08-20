import Head from 'next/head'
import Navbar from '../navbar.js'
import {Box,Container} from '@chakra-ui/react'
// import NoSsr from '../no-ssr'
// import VoxelDog from '../voxel-dog'

const Main = ({children,router})=>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=divice-width, initial-scale=1"/>
                <meta name="author" content="Kyunghoon Shin"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>

                <title>Kyunghoon It&apos;s Me</title>
            </Head>
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt = {14}>
                {/* <NoSsr>
                    <VoxelDog/>
                </NoSsr> */}
             {children}
            </Container>
        </Box>
    )
}

export default Main