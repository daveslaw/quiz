import { QuestionContainer, Answers, AnswerContainer } from "./question-item.styles";
import { useEffect } from "react";
import { decodeHTMLEntities, shuffle } from "../../library/functions";

import React from "react";

const QuestionItem = ({ questionUnit }) => {
	const { question, incorrect_answers, correct_answer } = questionUnit;

	const answerArray = shuffle([correct_answer, ...incorrect_answers]);

	useEffect(() => {
		console.log(correct_answer);
	}, []);

	return (
		<QuestionContainer>
			{/* <h3>{questionText}</h3>
			answers.map((answer, index) =>
			<div key={index}>{answer}</div>) */}
			<h2>{decodeHTMLEntities(question)}</h2>
			<AnswerContainer>
				{answerArray.map((answer, index) => (
					<Answers key={index}>{decodeHTMLEntities(answer)}</Answers>
				))}
			</AnswerContainer>
		</QuestionContainer>
	);
};

export default QuestionItem;
