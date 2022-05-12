import { Container } from '..';
import TreePNG from '../../../assets/tree.png'
import RostokPNG from '../../../assets/rostok.png'
import BranchPNG from '../../../assets/branch.png'
import styled from 'styled-components/macro';
import { useOfferData } from '../../../hooks/useOfferData';

export const Img = styled.div<{image: string}>`
    width: 20px;
    height: 20px;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const ProgressContainer = styled.div`
    width: 100%;
    height: 8px;
    margin-bottom: 28px;
    overflow: hidden;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.statusBar.contrast};
    position: relative;
`;

const ProgressContent = styled.div<{ progress: number}>`
    min-width: 8px;
    width: ${props => `${100 * props.progress}%`};
    height: 8px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.statusBar.default};
    position: absolute;
    transition: width 200ms ease-in;
    left: 0;
    top: 0;
`

const Progress = () => {

    const { progress } = useOfferData();
    
    return (
        <>
            <Container.Flex justify='between' direction='row' fullWidth margin={"0 0 4px"}>
                <Img image={RostokPNG} />
                <Img image={BranchPNG} />
                <Img image={TreePNG} />                
            </Container.Flex>

            <ProgressContainer>
                <ProgressContent progress={progress} />
            </ProgressContainer>
            
        </>
    )
};

export default Progress;