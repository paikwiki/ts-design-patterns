class Client {
  buildRocket<T extends Rocket>(factory: RocketFactory<T>): T {
    let rocket = factory.createRocket();
    rocket.payload = factory.createPayload();
    rocket.stages = factory.createStages();
    return rocket;
  }
}
