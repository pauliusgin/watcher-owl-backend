import cron from "node-cron";

function cronJob() {
	const task = cron.schedule(`*/3 * * * * *`, () => {
		console.log("async task");
	});

	task.start();

	setTimeout(() => {
		task.stop();
	}, 10000);
}

export { cronJob };
