import { useEffect, useState } from "react";
import axios from "axios";
import QuestionItem from "../QuestionItem/QuestionItem";

const Quiz = () => {
	const [quizData, setQuizData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://opentdb.com/api.php?amount=10&type=multiple"
			);
            

			setQuizData(response.data.results);
            
		};
		fetchData();
	}, []);

	return (
		<div>
			<h2>Quiz</h2>
			{quizData.map((questionUnit) => (
				<QuestionItem key={questionUnit.question} questionUnit={questionUnit}/>
			))}
		</div>
	);
};

export default Quiz;
