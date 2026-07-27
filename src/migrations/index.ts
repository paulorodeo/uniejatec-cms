import * as migration_20260726_190612_initial_schema from './20260726_190612_initial_schema';

export const migrations = [
  {
    up: migration_20260726_190612_initial_schema.up,
    down: migration_20260726_190612_initial_schema.down,
    name: '20260726_190612_initial_schema'
  },
];
