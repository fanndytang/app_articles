'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mongo',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: '',
      user: '',
      password: '',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {
        host: '127.0.0.1',
        port: '27017',
        database: 'myappdb',
        user: '',
        password: '',
        prefix: '',
        encoding: 'utf8'
    }
  }
};