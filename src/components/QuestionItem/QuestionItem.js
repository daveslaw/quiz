import {
	QuestionContainer,
	Answers,
	AnswerContainer,
	Button,
} from "./question-item.styles";
import { useEffect, useState } from "react";
import { decodeHTMLEntities, shuffle } from "../../library/functions";

import React from "react";

const QuestionItem = ({ questionUnit }) => {
	const { question, incorrect_answers, correct_answer } = questionUnit;
	const [score, setScore] = useState(0);

	const [answerArray, setAnswerArray] = useState(
		shuffle([correct_answer, ...incorrect_answers]).map((answer, index) => {
			return { text: answer, id: index, selected: false };
		})
	);

	const checkAnswer = () => {
		// Check if correct answer === answer in the array
		// set isCorrect to true / false in the array
		//
		// if selected=false and correct=false - no change
		//if selected=true and correct=true - change to green , add 1 to score
		// if selected=true correct=false - change to red
		// if selected=false correct=true - change to green
		setAnswerArray((answerArray) =>
			answerArray.map((answer) => {
				return answer.text === correct_answer
					? { ...answer, isCorrect: true }
					: { ...answer, isCorrect: false };
			})
		);			
		
		
	};

	const toggleHandler = (event) => {
		setAnswerArray((answerArray) =>
			answerArray.map((answer) => {
				return answer.text === event.target.innerHTML
					? { ...answer, selected: true }
					: { ...answer, selected: false };
			})
		);

		if (event.currentTarget.selected) {
			setAnswerArray((answerArray) =>
				answerArray.map((answer) => {
					return answer.text === event.target.innerHTML
						? { ...answer, selected: false }
						: answer;
				})
			);
		}
	};

	useEffect(() => {
		answerArray.map((answer) => {
			if (answer.selected && answer.isCorrect) {
				return setScore((prevState) => prevState + 1);
			}

			return null;
		});
		console.log(answerArray);
		console.log(correct_answer)
		console.log('score',score)
	}, [answerArray]);

	return (
		<QuestionContainer>
			<h2>{decodeHTMLEntities(question)}</h2>
			<AnswerContainer>
				{answerArray.map(({ text, id, selected, isCorrect }) => (
					<Answers
						onClick={toggleHandler}
						correct={isCorrect}
						selected={selected}
						key={id}
					>
						{text}
					</Answers>
				))}
				<Button onClick={checkAnswer}>Check answers</Button>
			</AnswerContainer>
		</QuestionContainer>
	);
};

export default QuestionItem;
