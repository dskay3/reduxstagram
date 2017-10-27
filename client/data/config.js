import Raven from 'raven-js';

const sentry_key = 'ed7ea546946c4113a69b7b56c9ad7ec3';
const sentry_app = '236767';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
