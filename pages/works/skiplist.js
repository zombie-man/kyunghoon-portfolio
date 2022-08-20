import {Container,Badge, Link,List,ListItem, Heading} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () =>{
    return(
        <Layout title="SkipList">
            <Container>
                <Title>
                    SkipList <Badge>2020</Badge>
                </Title>
                <P>
                    In Linux System Application Design class, I worked on a team project to
                    improve the data structure of the Linux kernel.
                    Our team implemented a skiplist with the goal of improving the 
                    insert/delete/read performance of linkedlist. I was able to experience
                    CLI environment and using various test functions such as 'assert'.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Platform </Meta>
                        <span>Linux(Ubuntu/CentOS)</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Linux, C, C++, STL</span>
                    </ListItem>
                    
                </List>


                <Heading as = "h3" fontSize={20} mb={4} mt={10}>
                    Skiplist - Data structure
                </Heading>
                <WorkImage src="/images/works/Skiplist/skiplist_eyecatch.png" alt="algoreco" mt={10}/>

                <Heading as = "h3" fontSize={20} mb={4} mt={10}>
                    Improvement Result
                </Heading>
                <WorkImage src="/images/works/Skiplist/skiplist_page0.JPG" alt="algoreco" mt={10}/>
                
            </Container>
        </Layout>
    )
}

export default Work