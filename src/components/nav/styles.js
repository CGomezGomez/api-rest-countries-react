import styled from 'styled-components';

const StyledContainer = styled.section`

	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
	padding: 2rem 4rem;
    
	&.dark {
    background-color: #2B3844;
  }

`;

const StyledDiv = styled.div`

	display: flex;
	align-items: center;
	gap: 0.5rem;

`;

const StyledH1 = styled.h1`

	cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
	
`;

export { StyledContainer, StyledDiv, StyledH1 };