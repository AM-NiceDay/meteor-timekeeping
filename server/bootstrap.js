BootstrapDays = [ 
	{
		// 02.19.2015
		date: moment().format('YYYY-MM-DD'),
		start: {
			hour: 9,
			minute: 0
		},
		/*end: {
			hour: 18,
			minute: 0
		},*/
		records: [
			{hour: 9, minute: 0, tag: 'java', description: 'Spring'}, 
			{hour: 11, minute: 0, tag: 'work', description: 'Scrum meetion'}, 
			{hour: 11, minute: 10, tag: 'break', description: 'Short break'}, 
			{hour: 11, minute: 20, tag: 'work', description: 'Personalization'}, 
			{hour: 12, minute: 20, tag: 'work', description: 'Scrum meetion'}, 
			{hour: 12, minute: 55, tag: 'java', description: 'Spring'}, 
			{hour: 13, minute: 35, tag: 'break', description: 'Long break'}, 
			{hour: 14, minute: 20, tag: 'java', description: 'Spring'}, 
			/*
			{hour: 14, minute: 40, tag: 'work', description: 'Personalization'}, 
			{hour: 15, minute: 35, tag: 'break', description: 'Short break'}, 
			{hour: 15, minute: 40, tag: 'java', description: 'Spring'}, 
			{hour: 16, minute: 0, tag: 'break', description: 'Long break'}, 
			{hour: 16, minute: 25, tag: 'java', description: 'Spring'}, 
			{hour: 17, minute: 25, tag: 'break', description: 'Short break'}, 
			{hour: 17, minute: 40, tag: 'work', description: 'Personalization'}
			*/
		]
	},
	{
		// 02.24.2015
		date: moment().subtract(1, 'days').format('YYYY-MM-DD'),
		start: {
			hour: 9,
			minute: 55
		},
		end: {
			hour: 18,
			minute: 15
		},
		records: [
			{hour: 9, minute: 55, tag: 'work', description: 'Mail and Jira'}, 
			{hour: 10, minute: 15, tag: 'projects', description: 'Spring-tk'}, 
			{hour: 10, minute: 45, tag: 'work', description: 'Personalization'}, 
			{hour: 11, minute: 0, tag: 'work', description: 'Scrum meeting'}, 
			{hour: 11, minute: 15, tag: 'break', description: 'Short break'}, 
			{hour: 11, minute: 20, tag: 'work', description: 'Personalization'}, 
			{hour: 11, minute: 25, tag: 'projects', description: 'Spring-tk'}, 
			{hour: 12, minute: 30, tag: 'break', description: 'Lunch break'}, 
			{hour: 13, minute: 30, tag: 'projects', description: 'Spring-tk'}, 
			{hour: 13, minute: 55, tag: 'break', description: 'Short break'}, 
			{hour: 14, minute: 10, tag: 'projects', description: 'Spring-tk'}, 
			{hour: 14, minute: 15, tag: 'break', description: 'Long break'}, 
			{hour: 16, minute: 00, tag: 'work', description: 'Personalization'}
		]
	}
];
