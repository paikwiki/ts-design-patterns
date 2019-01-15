import { SyncingRequest } from "./client";

export interface DataSyncingInfo {
  timestamp: number;
  data: string;
}

export interface ServerDataItem {
  id: string;
  timestamp: number;
  lastModifiedTime: number;
  value: string;
}

export interface ServerDataStore {
  items: {
    [id: string]: ServerDataItem
  };
}

export interface SyncingResponse {
  timestamp: number;
  changes: {
    [id: string]: string;
  }
}

export class Server {
  store: ServerDataStore = {
    items: Object.create(null)
  };

  synchronize(request: SyncingRequest): SyncingResponse {
    // let lastTimestamp = request.timestamp;
    let clientChanges = request.changes;
    let now = Date.now();
    // let serverChanges: serverChangeMap = Object.create(null);

    let items = this.store.items;
    
    for (let id of Object.keys(clientChanges)) {
      let clientChange = clientChanges[id];
      if (
        Server.hasOwnProperty.call(items, id) &&
        items[id].lastModifiedTime > clientChange.lastModifiedTime
      ) {
        continue;
      }
      items[id] = {
        id,
        timestamp: now,
        lastModifiedTime: items[id].lastModifiedTime,
        value: clientChange.value
      };
    }
    return {
      timestamp: now,
      changes: serverChanges
    };
  }
}
