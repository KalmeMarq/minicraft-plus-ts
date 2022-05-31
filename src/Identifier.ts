export class Identifier {
  private namespace: string;
  private path: string;

  public constructor(id: string);
  public constructor(namespace: string, path: string);
  public constructor(namespaceOrPath: string, path?: string) {
    if (path) {
      this.namespace = namespaceOrPath;
      this.path = path;
    } else {
      const path = namespaceOrPath.includes(':')
        ? namespaceOrPath.split(':')
        : ['minicraft', namespaceOrPath];
      this.namespace = path[0];
      this.path = path[1];
    }
  }

  public getNamespace(): string {
    return this.namespace;
  }

  public getPath(): string {
    return this.path;
  }

  public toString(): string {
    return `${this.namespace}:${this.path}`;
  }
}
