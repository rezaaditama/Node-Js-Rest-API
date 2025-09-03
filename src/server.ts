import app from './app';
import { ENV } from './config/env';
import { logger } from './config/logger';

app.listen(ENV.PORT, () => logger.info(`Server running on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`));
