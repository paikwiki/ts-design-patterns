import * as Path from 'path';
import * as FS from 'fs';

abstract class FileSystemObject {
  constructor(
    public path: string,
    public parent?: FileSystemObject
  ) {}

  get basename(): string {
    return Path.basename(this.path);
  }
}
