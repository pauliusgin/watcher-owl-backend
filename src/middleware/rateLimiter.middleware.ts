import rateLimit from "express-rate-limit";

const generalRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 1000,
	message: "Too many requests, please try again later.",
});

const loginRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 20,
	message: "Too many login attempts, please try again later.",
  });

export { generalRateLimiter, loginRateLimiter };
