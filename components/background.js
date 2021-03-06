import Image from 'next/image'
import { BackgroundCont, LeftHeader, BackgroundImage, CenterCircle, RightHeader, MediumLeft, MediumRight } from './background.styles'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Background(){

    return(
        <ParallaxProvider>
            <BackgroundCont>
                <LeftHeader y={[-30, 30]}>
                    <BackgroundImage src="/Background/Circle1.svg"></BackgroundImage>
                </LeftHeader>
                <CenterCircle y={[0, 50]}>
                    <BackgroundImage src="/Background/Circle2.svg"></BackgroundImage>
                </CenterCircle>
                <RightHeader y={[80, -60 ]}>
                    <BackgroundImage src="/Background/Circle3.svg"></BackgroundImage>
                </RightHeader>
                <MediumLeft y={[0, 150]}>
                    <BackgroundImage src="/Background/Circle4.svg"></BackgroundImage>
                </MediumLeft>
                <MediumRight y={[40, 200]}>
                    <BackgroundImage src="/Background/Circle5.svg"></BackgroundImage>
                </MediumRight>
            </BackgroundCont>
        </ParallaxProvider>
    )
}