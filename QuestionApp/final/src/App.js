import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Caapital ny madagascar???',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Antananarivo', isCorrect: true },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Iza no PR ny madagascar?',
			answerOptions: [
				{ answerText: 'Andri Rajolina', isCorrect: true },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Van dam', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Aiza no misi ani madagascar?',
			answerOptions: [
				{ answerText: 'Affrique', isCorrect: true },
				{ answerText: 'Atlantique', isCorrect: false },
				{ answerText: 'Amazoni', isCorrect: false },
				{ answerText: 'Arctique', isCorrect: false },
			],
		},
		{
			questionText: 'Firy ny isani region eto madagascar?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '22', isCorrect: true },
				{ answerText: '14', isCorrect: false },
				{ answerText: '14', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Nahazo isa {score} enao tamin {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
