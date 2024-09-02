export default abstract class BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  
    protected constructor(id?: number, createdAt?: Date, updatedAt?: Date) {
      this.id = id;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  