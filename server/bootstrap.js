BootstrapDays = [ 
	{
		// 02.19.2015
		date: moment().format('YYYY-MM-DD'),
		start: "09:00",
		// end: "18:00"
		records: [
			{time: "09:00", project: 'java', task: 'Spring'}, 
			{time: "11:00", project: 'work', task: 'Scrum meetion'}, 
			{time: "11:10", project: 'break', task: 'Short break'}, 
			{time: "11:20", project: 'work', task: 'Personalization'}, 
			{time: "12:20", project: 'work', task: 'Scrum meetion'}, 
			{time: "12:55", project: 'java', task: 'Spring'}, 
			{time: "13:35", project: 'break', task: 'Long break'}, 
			{time: "14:20", project: 'java', task: 'Spring'}, 
			/*
			{time: "14:40", project: 'work', task: 'Personalization'}, 
			{time: "15:35", project: 'break', task: 'Short break'}, 
			{time: "15:40", project: 'java', task: 'Spring'}, 
			{time: "16:00", project: 'break', task: 'Long break'}, 
			{time: "16:25", project: 'java', task: 'Spring'}, 
			{time: "17:25", project: 'break', task: 'Short break'}, 
			{time: "17:40", project: 'work', task: 'Personalization'}
			*/
		]
	},
	{
		// 02.24.2015
		date: moment().subtract(1, 'days').format('YYYY-MM-DD'),
		start: "09:55",
		end: "18:15",
		records: [
			{time: "09:05", project: 'work', task: 'Mail and Jira'}, 
			{time: "10:15", project: 'projects', task: 'Spring-tk'}, 
			{time: "10:45", project: 'work', task: 'Personalization'}, 
			{time: "11:00", project: 'work', task: 'Scrum meeting'}, 
			{time: "11:15", project: 'break', task: 'Short break'}, 
			{time: "11:20", project: 'work', task: 'Personalization'}, 
			{time: "11:25", project: 'projects', task: 'Spring-tk'}, 
			{time: "12:30", project: 'break', task: 'Lunch break'}, 
			{time: "13:30", project: 'projects', task: 'Spring-tk'}, 
			{time: "13:55", project: 'break', task: 'Short break'}, 
			{time: "14:10", project: 'projects', task: 'Spring-tk'}, 
			{time: "14:15", project: 'break', task: 'Long break'}, 
			{time: "16:00", project: 'work', task: 'Personalization'}
		]
	}
];
