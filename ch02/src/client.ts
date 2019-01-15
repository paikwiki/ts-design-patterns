import { Server, DataSyncingInfo } from './server';

export interface ClientDataItem {
  id: string;
  value: string;
}

export interface ClientDataStore {
  timestamp: number;
  items: {
    [id: string]: ClientDataItem;
  }
  changed: {
    [id: string]: number;
  }
}

export interface ClientChange {
  lastModifiedTime: number;
  value: string;
}

export interface SyncingRequest {
  timestamp: number;
  clientTime: number;
  changes: {
    [id: string]: ClientChange;
  }
}

export class Client {
  store: ClientDataStore = {
    timestamp: 0,
    items: Object.create(null),
    changed: Object.create(null)
  };
  constructor(
    public server: Server
  ) { }

  synchronize(): void {
    let store = this.store;
    let clientItems = store.items;
    let clientChanges: clientChangeMap = Object.create(null);
    let changedTimes = store.changed;

    for (let id of Object.keys(changedTimes)) {
      clientChanges[id] = {
        lastModifiedTime: changedTimes[id],
        value: clientItems[id].value
      };
    }

    let response = this.server.synchronize({
      timestamp: store.timestamp,
      clientTime: Date.now(),
      changes: clientChanges
    });

    store.changed = Object.create(null);
  }

  update(id: string, value: string): void {
    let store = this.store;
    store.items[id] = {
      id,
      value
    };
    store.changed[id] = Date.now();
  }
}
