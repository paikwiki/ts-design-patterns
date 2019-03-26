function createFancyObject<T>(constructor: Constructor<T>): T {
  return new constructor();
}
