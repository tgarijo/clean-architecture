import { checkHealth } from "src/shared/health";

const health = checkHealth();
console.log(`System health status: ${health.status} at ${health.timestamp.toISOString()} with uptime ${health.uptime}ms`);