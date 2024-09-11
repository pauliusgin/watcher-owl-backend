const config = {
	api:
		process.env.NODE_ENV === "production"
			? "https://watcher-owl-backend.vercel.app/api"
			: "http://localhost:4000/api",
};

export { config };
