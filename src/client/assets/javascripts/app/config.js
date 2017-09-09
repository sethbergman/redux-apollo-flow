const SENTRY_KEY = 'config.SENTRY_KEY';
const SENTRY_APP = 'congig.SENTRY_APP';
export const SENTRY_URL = `https://${SENTRY_KEY}@sentry.io/${SENTRY_APP}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
