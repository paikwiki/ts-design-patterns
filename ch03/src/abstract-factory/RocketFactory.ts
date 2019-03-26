interface RocketFactory<T extends Rocket> {
  createRocket(): T;
  createPayload(): Payload;
  createStages(): Stage[];
}
