import styled from "styled-components";

export const Conatainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-bottom: 100px;
    background-color: ${(props) => props.theme.background}
`;