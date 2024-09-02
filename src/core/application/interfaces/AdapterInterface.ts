export default interface AdapterInterface<T, S> {
    dtoToEntity(dto: any): S;
    entityToDto(entity: S): any;
    domainToEntity(domain: T): S;
    entityToDomain(entity: S): T;
    domainToDto(domain: T): any;
  }
  