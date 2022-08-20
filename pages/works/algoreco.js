import {Container,Badge,List,ListItem, Heading} from '@chakra-ui/react'
// import {ExternalLinkIcon} from '@chakra-ui/icons'
import{Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () =>{
    return(
        <Layout title="AlgoReco">
            <Container>
                <Title>
                    AlgoReco <Badge>2022</Badge>
                </Title>
                <P>
                    &quot;AlgoReco&quot; is a problem recommendation and learning management application for people
                    learning algorithms thorough the algorithm online judge platform. 
                    We designed a personalized problem service for effective learning of users. 
                    Also We have developed an application that has better usability than traditional web services by adding 
                    individual problem memo spaces, community board and history functions.
                </P>
                <P>
                    As a three-person team project, I was in charge of implementing the Backend part.
                    Using Spring Boot I implemented server that provides overall server functionality as a Rest API,
                     including a list of recommended and solved problems.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Platform </Meta>
                        <span>iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java, Spring Boot, Spring Data JPA, MySQL, Redis, Flask, AWS</span>
                    </ListItem>
                    
                </List>

                <Heading as = "h3" fontSize={20} mb={4} mt={10}>
                    Server Structure
                </Heading>
                <WorkImage src="/images/works/AlgoReco/algoreco_server_structure.JPG" alt="algoreco" mt={10}/>

                <Heading as = "h3" fontSize={20} mb={4} mt={10}>
                    Pages
                </Heading>
                <WorkImage src="/images/works/AlgoReco/algoreco_page0.JPG" alt="algoreco" mt={10}/>
                
            </Container>
        </Layout>
    )
}

export default Work