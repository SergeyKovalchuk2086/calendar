import React, { useState } from 'react';
import moment from 'moment';
import CalendarGrid from './CalendarGrid';
import { Title } from './Title';
import Monitor from './Monitor';
import styled from 'styled-components';

const ShadowWrapper = styled('div')`
border-radius: 8px;
overflow: hidden;
border-top: 1px solid #737374;
border-left: 1px solid #464648;
border-right: 2px solid #464648;
border-bottom: 2px solid #464648;
box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888
`;


function App() {
	// window.moment = moment;
	// const today = moment();
	moment.updateLocale('en', { week: { dow: 1 } });
	const [today, setToday] = useState(moment())

	const startDay = today.clone().startOf('month').startOf('week');

	const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
	const todayHandler = () => setToday(moment());
	const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

	return (
		<ShadowWrapper>
			<Title />
			<Monitor today={today}
				prevHandler={prevHandler}
				todayHandler={todayHandler}
				nextHandler={nextHandler}
			/>
			<CalendarGrid startDay={startDay} />
		</ShadowWrapper>
	);
}

export default App;
