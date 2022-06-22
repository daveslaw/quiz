import {
	QuestionContainer,
	Answers,
	AnswerContainer,
} from "./question-item.styles";
import { useEffect, useState } from "react";
import { decodeHTMLEntities, shuffle } from "../../library/functions";

import React from "react";

const QuestionItem = ({ questionUnit }) => {
	const { question, incorrect_answers, correct_answer } = questionUnit;
	const [selected, setSelected] = useState(false);

	const [answerArray, setAnswerArray] = useState(
		shuffle([correct_answer, ...incorrect_answers]).map((answer, index) => {
			return { text: answer, id: index, selected:  false };
		})
	);

	// const [isActive, setIsActive] = useState(false);

	const toggleHandler = (event) => {
		setAnswerArray((answerArray) =>
			answerArray.map((answer) => {
				return answer.text === event.target.innerHTML
					? {...answer, selected: true }
					: {...answer, selected: false}
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

	// const answerChecker = (event) => {

	//

	// 		// } else {
	// 		// 	console.log("Incorrect")
	// 		// }

	// 	//  answerArray.map((answer) =>
	// 	// 	answer.id === event.target.innerHTML
	// 	// 		?
	// 	// 		: setAnswerArray(answerArray)
	// 	// )
	// };

	useEffect(() => {
		console.log(answerArray);
	}, [answerArray]);

	return (
		<QuestionContainer>
			<h2>{question}</h2>
			<AnswerContainer>
				{answerArray.map(({ text, id, selected }) => (
					<Answers onClick={toggleHandler} selected={selected} key={id}>
						{text}
					</Answers>
				))}
			</AnswerContainer>
		</QuestionContainer>
	);
};

export default QuestionItem;
