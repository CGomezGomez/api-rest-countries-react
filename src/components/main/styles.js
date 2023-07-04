import styled from "styled-components";


const StyledForm = styled.form`


	display: flex;
	justify-content: space-between;
	margin: 2rem;
	position: relative;

	&::after {

		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		background-image: url(/public/search.svg);
		background-size: 100%;
		top: 1rem;
		left: 1rem;

	}
`;

const StyledInput = styled.input`

	width: 40%;
	padding: 1rem;
	padding-left: 4rem;
	border: none;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);

	background-color: ${props => (props.darkMode 
		? '#2B3844' 
		: '#ffffff')};
  	color: ${props => (props.darkMode 
		? '#ffffff' 
		: '#000000')};
	
`;

const StyledSelect = styled.select`

	border: none;
	box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
	padding: 1rem;

	background-color: ${props => (props.darkMode 
		? '#2B3844' 
		: '#ffffff')};
  	color: ${props => (props.darkMode 
		? '#ffffff' 
		: '#000000')};

`;
const StyledCardContainer = styled.div`

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

`;

const StyledCard = styled.div`

	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
	margin: 2rem;
	flex-basis: calc(25% - 4rem); 
	background-color: ${props => (props.darkMode 
		? '#2B3844' 
		: '#ffffff')};

`

const StyledImg = styled.img`

	margin-bottom: 1.5rem;

`

const StyledName = styled.h3`

	padding: 0 2rem;
	margin-bottom: 1rem;

`

const StyledP = styled.p`

	padding: 0 3rem;
	margin-bottom: .4rem;
	font-weight: 700;

`

const StyledSpan = styled.span`

	font-weight: 200;

`

export {StyledForm , StyledInput , StyledSelect , StyledCard , StyledImg , StyledName , StyledP , StyledSpan , StyledCardContainer }