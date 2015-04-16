var timer = new ReactiveTimer();
timer.start(0.5);

Template.addRecordForm.helpers({
	currentTime: function() {
		timer.tick();
		return moment().format("HH:mm");
	}
});

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
				form.time.value = moment().format("HH:mm");
				form.task.value = "";
				form.project.value = "";
			}
		});
	},

	"click #end": function(e, template) {
		e.preventDefault();
		var $time = $('#time');

		var id = Days.findOne({ date: Session.get('date') })._id;

		Days.update(id , { $set: { end: $time.val() } }, function(error) {
			if (error) {
				console.log(error.reason);
			}
		});
	}
});