export interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  timestamp: Date;
  uptime: number;
}

/**
 * Función trivial para verificar el estado de salud del sistema
 * @returns HealthStatus con el estado actual
 */
export const checkHealth = (): HealthStatus => {
  return {
    status: 'healthy',
    timestamp: new Date(),
    uptime: Date.now(),
  };
};

/**
 * Función trivial para verificar si el sistema está saludable
 * @returns true si el sistema está saludable
 */
export const isHealthy = (): boolean => {
  const health = checkHealth();
  return health.status === 'healthy';
};
