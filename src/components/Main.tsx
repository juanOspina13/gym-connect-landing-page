import Entrenamientos from "./Entrenamientos";
import Header from "./Header";
import Intro from "./Intro";
import { MainContainer, MainWrapper } from "./MainStyles"

const Main = () => {
    return (

        <MainWrapper>
            <Header></Header>
            <MainContainer className="w-4/5"><Intro></Intro>
                <Entrenamientos></Entrenamientos>
                {/*
        <Crossfit></Crossfit>
        */}
            </MainContainer>
        </MainWrapper>
    )
}

export default Main;