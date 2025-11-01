import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Archivos de test
    include: ['test/**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules', 'dist'],

    // Entorno de ejecución
    environment: 'node',

    // Cobertura de código
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'test/',
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/types/',
        '**/*.d.ts',
        'vitest.config.ts',
        'main.ts',
      ],
      all: true,
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },

    // Configuración de reporters
    reporters: ['verbose'],

    // Globales de test (opcional - permite usar describe, it, expect sin importar)
    globals: false,

    // Timeout para tests
    testTimeout: 10000,
    hookTimeout: 10000,

    // Clear mocks entre tests
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,

    // Ejecución de tests
    isolate: true,
    maxConcurrency: 5,

    // Watch mode configuration
    watch: false,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@domain': resolve(__dirname, './src/domain'),
      '@application': resolve(__dirname, './src/application'),
      '@infrastructure': resolve(__dirname, './src/infrastructure'),
      '@shared': resolve(__dirname, './src/shared'),
      '@config': resolve(__dirname, './src/config'),
    },
  },
});
