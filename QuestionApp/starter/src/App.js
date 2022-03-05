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

	return (
		<div className='app'>
			
			{false ? (
				<div className='score-section'>Nahazo isa rai enao tamin{questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Fanotaniaina 1</span>/{questions.length}
						</div>
						<div className='question-text'>Eto no tokony halehan'ny lahatsoratra fanontaniana</div>
					</div>
					<div className='answer-section'>
						<button>Valini 1</button>
						<button>Valini 2</button>
						<button>Valini 3</button>
						<button>Valini 4</button>
					</div>
				</>
			)}
		</div>
	);
}
