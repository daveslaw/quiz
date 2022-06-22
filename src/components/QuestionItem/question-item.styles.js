import styled from "styled-components";

export const QuestionContainer = styled.div`
	color: #293264;

	width: 80%;
	margin: 5px auto;
	border-bottom: 1px solid #293264;
	padding-bottom: 20px;
`;

export const AnswerContainer = styled.div`
	display: flex;
	// border: green solid 1px;

	flex-flow: row wrap;
	justify-content: space-evenly;
`;

export const Answers = styled.div`
	border: black;
	background-color: ${(props) => (props.selected ? "#D6DBF5" : "white")};
	border-radius: 7.71px;
	border: 1px solid #293264;
	cursor: pointer;
	height: 20px;
	min-width: 100px;
	display: flex;
	justify-content: center;
	align-items: flex-end;

	padding: 2px 5px;

	color: #293264;
`;

export const Button = styled.button`
	background-color: #4d5b9e;
	color: white;
`;
