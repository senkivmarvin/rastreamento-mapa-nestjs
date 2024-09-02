export default interface RepositoryInterface<T> {
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    find(id: number): Promise<T>;
    findAll(): Promise<T[]>;
    delete(id: number): Promise<void>;
  }
  