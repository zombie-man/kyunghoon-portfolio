import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    Image,
    Icon,
    Link,
    List,
    ListItem,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection,BioYear } from '../components/bio'
import { GridItem } from '../components/grid-items'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

import {IoMdMail, IoIosArrowDropright} from 'react-icons/io'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} mt={5} align="center">
                Hello, I&apos;m a Junior Backend developer based in Korea!
            </Box>
            <Box display ={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Kyunghoon Shin
                    </Heading>
                    {/* <p>Digital Craftzman ( Artist / Developer / Designer</p> */}
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{ md: 6}} align="center">
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/kyunghoon.jpeg" 
                        alt="Profile Image" 
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as = "h3" variant = "section-title">
                    Work 
                </Heading>
                <Paragraph>
                    While majoring in computer science and engineering, I was able to
                    learn basic computer science knowledge and take courses in various fields.
                    Among the various courses, I became interested in backend development part
                    after took Linux system and Network Application design course. 
                </Paragraph>
                <Paragraph>
                    I'm using Java Spring mainly as a backend framework. 
                    Currently, I'm studying CI/CD technology with Docker.
                    I like to study new technology / languages and solve algorithm problems. 
                </Paragraph>

                <Paragraph>
                    I want to understand how the services that many people use are implemented,
                    solve problems that arise with the services. and think more broadly and deeply 
                    about backend development. Also I want to have the ability to think more
                    broadly and deeply about develpment.
                </Paragraph>
                
                <Box align = "center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1996</BioYear>
                    Born in Seoul, South Korea.
                </BioSection>
                <BioSection>
                    <BioYear>2015</BioYear>
                    Enter Chung-ang university 
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Serving in the Republic of Korea Army (~2018)
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Worked at KB Kookmin Bank as a Digiter supporters
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Achived Team Fight Tactics Master tier
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Worked at Q.C lab as a QA intern
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Received bachelor's degree in School of Computer Science and
                    Engineering at Chung-ang University 
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the Web / Contact
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/zombie-man" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoGithub}/>}>
                                @zombie-man
                            </Button>
                        </Link>
                    </ListItem>
                </List>
                <List>
                    <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoMdMail}></Icon>}>
                        bounce1011@naver.com
                    </Button>
                </List>
                <List>
                    <Link href="https://solved.ac/profile/nuguri_fan" colorScheme='teal'>
                        <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoIosArrowDropright}></Icon>}>
                            BaekJoon Online Judge (Algorithm/PS)
                        </Button>
                        <Image align='left' ml={5} src="http://mazassumnida.wtf/api/v2/generate_badge?boj=nuguri_fan"/>
                    </Link>
                </List>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page