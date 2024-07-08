import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

export default rateLimiter;
