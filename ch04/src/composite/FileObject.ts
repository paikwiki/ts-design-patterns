import FS from "fs";

class FileObject extends FileSystemObject {
  readAll(): Buffer {
    return FS.readFileSync(this.path);
  }
}
