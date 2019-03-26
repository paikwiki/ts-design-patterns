abstract class RocketBuilder<
  TRocket extends Rocket,
  TPayload extends Payload
> {
  createRocket(): void {}
  addPayload(payload: TPayload): void {}
  addStages(): void {}
  refuelRocket(): void {}
  abstract get rocket(): TRocket;
}
