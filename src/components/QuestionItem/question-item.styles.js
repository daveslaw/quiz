import styled from "styled-components";

export const QuestionContainer = styled.div`
	color: red;
`;

export const AnswerContainer = styled.div`
	display: flex;

	flex-flow: row wrap;
	justify-content: space-evenly;
`;

export const Answers = styled.div`
	border: black;
	background-color: ${(props) => (props.selected ? "green" : "red")};
	border-radius: 5px;
	cursor: pointer;

	color: black;
`;
