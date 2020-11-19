const { env } = process;

module.exports = {
  DATABASE_CONNECTION_STRING: env.DATABASE_CONNECTION_STRING || '',
  DATE_FORMAT: 'YYYY-MM-DD',
  ENVS: {
    development: 'development',
    heroku: 'heroku',
    production: 'production',
  },
  ENV: env.ENV || this.ENVS.development,
  PORT: Number(env.PORT) || 9000,
};
