class RocketFactory {
  buildRocket(): Rocket {
    let rocket = this.createRocket();
    let payload = this.createPayload();
    let stages = this.createStages();
    rocket.payload = payload;
    rocket.stages = stages;

    return rocket;
  }
  createPayload(): Payload {
    return new Payload(0);
  }
  createStages(): Stage[] {
    let engine = new Engine(1000);
    let stage = new Stage([engine]);

    return [stage];
  }
  createRocket(): Rocket {
    return new Rocket();
  }
}
