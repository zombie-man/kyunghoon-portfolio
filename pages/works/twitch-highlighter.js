import {Container,Badge, Link,List,ListItem, Heading} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import{Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () =>{
    return(
        <Layout title="Twitch-Highlighter">
            <Container>
                <Title>
                    Twitch-Highlighter<Badge>2020</Badge>
                </Title>
                <P>
                    Twitch highlighter is web service that creates highlight video with twitch
                    replay video. When the user enters the address of the replay, server 
                    crawls chatlogs, creates a highlight video and uploads it to website.
                </P>
                <P>
                    I implemented web server application that receives user's input and create 
                    highlight video. Crawling chatlogs and video production process took a long time, so
                    I used celery to solve this problem.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Platform </Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python Django, Bootstrap, Django Celery, Redis</span>
                    </ListItem>
                    
                </List>

                <Heading as = "h3" fontSize={20} mb={4} mt={10}>
                    Pages
                </Heading>
                <WorkImage src="/images/works/TwitchHighlighter/twitchhighlight_page0.JPG" alt="algoreco" mt={10}/>
                <WorkImage src="/images/works/TwitchHighlighter/twitchhighlight_page1.JPG" alt="algoreco" mt={10}/>
                
            </Container>
        </Layout>
    )
}

export default Work