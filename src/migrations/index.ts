import * as migration_20260726_190612_initial_schema from './20260726_190612_initial_schema';
import * as migration_20260727_024407_sprint_3_content_model from './20260727_024407_sprint_3_content_model';

export const migrations = [
  {
    up: migration_20260726_190612_initial_schema.up,
    down: migration_20260726_190612_initial_schema.down,
    name: '20260726_190612_initial_schema',
  },
  {
    up: migration_20260727_024407_sprint_3_content_model.up,
    down: migration_20260727_024407_sprint_3_content_model.down,
    name: '20260727_024407_sprint_3_content_model'
  },
];
