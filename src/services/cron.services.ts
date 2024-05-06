import cron from "node-cron";

function firstCronJob(reps: number, delay: number) {
	const firstTask = cron.schedule(`*/${delay} * * * * *`, () => {
		console.log(`running a task every ${delay} seconds`);
	});

	firstTask.start();

	setTimeout(
		() => {
			firstTask.stop();
		},
		reps * delay * 1000
	);
}

export { firstCronJob };
