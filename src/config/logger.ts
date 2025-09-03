import pino, { LoggerOptions } from 'pino';

const isProd = process.env.NODE_ENV === 'production';

const options: LoggerOptions = {
  level: isProd ? 'info' : 'debug',
  ...(isProd
    ? {}
    : {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid, hostname',
          },
        },
      }),
};

export const logger = pino(options);
