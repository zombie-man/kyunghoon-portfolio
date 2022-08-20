import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-items'

import thumbInkdrop from'../public/images/works/AlgoReco/algoreco_eyecatch.png'
import thumbMyTeam from'../public/images/works/MyTeamManager/myteam_eyecatch.png'
import thumbTwitchHighlighter from '../public/images/works/TwitchHighlighter/twitchhighlight_eyecatch.png'
import thumbSkiplist from'../public/images/works/Skiplist/skiplist_eyecatch.png'

const Works = () => {
    return (
        <Container>
            <Heading as = "h3" fontSize={20} mt={16} mb={14}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="algoreco" title="Algoreco" thumbnail={thumbInkdrop}>
                        Algorithm problem recommendation application
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="myteam-manager" title="MyTeam-Manager" thumbnail={thumbMyTeam}>
                        Football team schedule and record management application
                    </WorkGridItem>
                </Section>

                <Section delay={0.4}>
                    <WorkGridItem id="twitch-highlighter" title="Twitch Highlighter" thumbnail={thumbTwitchHighlighter}>
                        Web service that generates highlight
                        video of twitch&apos;s streaming by crawling chat logs
                    </WorkGridItem>
                </Section>

                <Section delay={0.4}>
                    <WorkGridItem id="skiplist" title="Skip List" thumbnail={thumbSkiplist}>
                        Data Structure Improvement  
                        <p>Project for Linux Kernel</p>
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
    )
}

export default Works