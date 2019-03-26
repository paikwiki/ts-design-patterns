let client = new Client();

let experimentalRocketFactory = new ExperimentalRocketFactory();
let freightRocketFactory = new FreightRocketFactory();

let experimentalRocket = client.buildRocket(experimentalRocketFactory);
let freightRocket = client.buildRocket(freightRocketFactory);
