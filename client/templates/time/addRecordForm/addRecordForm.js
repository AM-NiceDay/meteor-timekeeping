Template.addRecordForm.events({
	"submit form": function(e, template) {
		e.preventDefault();
		var form = e.target;
		var record = {
			time: form.time.value,
			task: form.task.value,
			project: form.project.value
		};

		var id = Days.findOne({ date: Session.get('date') })._id;

		Days.update(id , { $push: { records: record } }, function(error) {
			if (error) {
				console.log(error.reason);
			} else {
				form.time.value = "";
				form.task.value = "";
				form.project.value = "";
			}
		});
	}
})