// Write your Character component here
import styled from 'styled-components'

export default function Character(props){
    const { charName, charAge } = props;

    const StyledCharacter = styled.div`
        width: 60%;
        display:flex;
        justify-content:space-between;
        border: 2px solid black;
        margin: 0.25%;
        background-color: #ffcc99;
    `;

    const StyledAge = styled.h3`
        border: 2px solid black;
        margin-right:1%;
        padding: 0.5%;
        display:flex;
        align-items:center;
    `;

    const StyledName = styled.h2`
        margin-left:1%;
    `;

    return(
        <StyledCharacter>
            <StyledName>{charName}</StyledName>
            <StyledAge>{charAge}</StyledAge>
        </StyledCharacter>
    );
}
