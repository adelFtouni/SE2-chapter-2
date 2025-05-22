export interface ID {
  getId(): string;
}

/**
 * Creates a new item in the repository.
 *
 * create a new item in the repository.
 *@template T - The type of the item to be created.
 * @throws {ItemInvalidException} Throws an error if the provided item is invalid.
 */
export interface IRepository<T extends ID> {

  create(item: T): Promise<ID>;
    /**
     * Retrieves an item from the repository by its ID.
     *
     * @param id - The ID of the item to retrieve.
     * @returns A promise that resolves to the retrieved item.
     * @throws {ItemNotFoundException} If the item is not found.
     */
  get(id: ID): Promise<T>;
    /**
     * Retrieves all items from the repository.
     *
     * @returns {Promise<T[]>} A promise that resolves to an array of all items.
     */
  getAll() : Promise<T[]>;
    /**
     * Updates an item in the repository.
     *
     * @param {T} item - The item to update.
     * @returns {Promise<void>} A promise that resolves when the item is updated.
     * @throws {ItemNotFoundException} Throws an error if the item is not found.
     */
  update(item : T) : Promise<void>;
    /**
     * Deletes an item from the repository by its ID.
     *
     * @param {ID} id - The ID of the item to delete.
     * @returns {Promise<void>} A promise that resolves when the item is deleted.
     * @throws {ItemNotFoundException} Throws an error if the item is not found.
     */
  delete(id: ID): Promise<void>;
}
