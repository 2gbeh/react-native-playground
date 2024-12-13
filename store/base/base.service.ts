export class BaseService {
  protected table: string;

  constructor(table: string) {
    this.table = table;
  }
  // /////////////////////////////////////////////////////////////////////////
  async getAll() {}
  async getById() {}
  async search() {}
  async filter() {}
  // /////////////////////////////////////////////////////////////////////////
  async create() {}
  async add() {}
  async update() {}
  async remove() {}
  async trash() {}
  async restore() {}
}
