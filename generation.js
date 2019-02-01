const Corgi = require('./corgi');
const { REFRESH_RATE, SECONDS} = require('./config');

const refreshRate = REFRESH_RATE*SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }
  calculateExpiration() {
    this.expiration = null;

    const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

    const msUntilExpiration = math.random() <0.5 ?
      refreshRate - expirationPeriod : 
      refreshRate + expirationPeriod;
    return  new Date(Date.now() + msUntilExpiration);
  }

  newCorgi() {
    if (Date.now()> this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }
    return new Corgi();

  }
}
module.exports = Generation;