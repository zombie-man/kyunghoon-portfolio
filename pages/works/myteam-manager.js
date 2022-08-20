import {Container,Badge, Link,List,ListItem, Heading} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () =>{
    return(
        <Layout title="myteam-manager">
            <Container>
                <Title>
                    MyTeam-Manager <Badge>2021</Badge>
                </Title>
                <P>
                    MyTeam-Manager is a football team schedule and record management application
                    developed as a toy project after taking mobile app development course.
                    It is composed of various activites necessary for soccer team management
                    on the Android framework. 
                    To make it easier for users to see, I used libraries such as MPAndroidChart
                    to chart data in app and implemented various sorting functions.
                </P>
                <P>
                    Also by implementing a REST API server that can store and retrieve data,
                    I have experienced linking client part and server part.
                    Server implemented with Spring Boot and Spring Data JPA.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Platform </Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Android(Java), Spring Boot, Spring Data JPA, MySQL, SQLite</span>
                    </ListItem>
                    
                </List>

                <Heading as = "h3" fontSize={20} mb={4} mt={10}>
                    Pages
                </Heading>
                <WorkImage src="/images/works/MyTeamManager/myteam_page0.JPG" alt="algoreco" mt={10}/>
                <WorkImage src="/images/works/MyTeamManager/myteam_page1.JPG" alt="algoreco" mt={10}/>
                
            </Container>
        </Layout>
    )
}

export default Work