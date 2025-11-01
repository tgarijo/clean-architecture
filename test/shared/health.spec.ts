import { describe, it, expect, beforeEach } from 'vitest';
import { checkHealth, isHealthy, HealthStatus } from '../../src/shared/health';

describe('Health Check Functions', () => {
  describe('checkHealth', () => {
    it('debería retornar un objeto HealthStatus', () => {
      const result = checkHealth();
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('status');
      expect(result).toHaveProperty('timestamp');
      expect(result).toHaveProperty('uptime');
    });

    it('debería retornar status "healthy"', () => {
      const result = checkHealth();
      
      expect(result.status).toBe('healthy');
    });

    it('debería retornar un timestamp válido', () => {
      const beforeCall = new Date();
      const result = checkHealth();
      const afterCall = new Date();
      
      expect(result.timestamp).toBeInstanceOf(Date);
      expect(result.timestamp.getTime()).toBeGreaterThanOrEqual(beforeCall.getTime());
      expect(result.timestamp.getTime()).toBeLessThanOrEqual(afterCall.getTime());
    });

    it('debería retornar un uptime mayor o igual a 0', () => {
      const result = checkHealth();
      
      expect(result.uptime).toBeGreaterThanOrEqual(0);
      expect(typeof result.uptime).toBe('number');
    });
  });

  describe('isHealthy', () => {
    it('debería retornar true cuando el sistema está saludable', () => {
      const result = isHealthy();
      
      expect(result).toBe(true);
    });

    it('debería retornar un valor booleano', () => {
      const result = isHealthy();
      
      expect(typeof result).toBe('boolean');
    });
  });
});
