const Generation = require('./index.js')

class GenerationEngine {
  constructor() {
    // This.generation will be the current generation
    this.generation = null;
    this.timer = null;
  }
  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }
  // calculate
  buildNewGeneration() {
    this.generation = new Generation();
    console.log('new generation', this.generation);
    // Should create a new generation
    this.timer = setTimeout(
      () => this.buildNewGeneration(), 
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;