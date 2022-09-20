import { v4 as uuidv4 } from "uuid";

type CommonDocument = Record<string | number, unknown>;

type DocumentWithId<T extends CommonDocument> = Omit<T, "_id"> & {
  _id: string;
};

export class InMemoryData {
  static getCollection<T extends CommonDocument>(collectionName: string) {
    const rawCollection = localStorage.getItem(collectionName);
    let collection: DocumentWithId<T>[] = [];

    try {
      collection = JSON.parse(rawCollection || "");
      if (!Array.isArray(collection)) {
        return collection;
      }

      return collection;
    } catch (error) {
      if (error instanceof SyntaxError) {
        return collection;
      }
      throw error;
    }
  }

  static writeCollection<T extends DocumentWithId<CommonDocument>>(
    collectionName: string,
    collection: T[]
  ) {
    localStorage.setItem(collectionName, JSON.stringify(collection));
  }

  static identifyDocument<T extends CommonDocument>(
    document: T
  ): DocumentWithId<T> {
    return { ...document, _id: uuidv4() };
  }

  static addDcument<T extends CommonDocument>(
    collectionName: string,
    document: T
  ): DocumentWithId<T> {
    const documentIdentified = this.identifyDocument(document);
    const collection = this.getCollection<T>(collectionName);

    this.writeCollection(collectionName, collection.concat(documentIdentified));

    return documentIdentified;
  }

  static removeDocument(collectionName: string, id: string) {
    const collection = this.getCollection<CommonDocument>(collectionName);
    this.writeCollection(
      collectionName,
      collection.filter(({ _id }) => _id !== id)
    );
  }

  static updateDocument<T extends CommonDocument>(
    collectionName: string,
    id: string,
    data: T
  ) {
    const collections = this.getCollection(collectionName);
    this.writeCollection(
      collectionName,
      collections.map((document) => {
        if (document._id === id) {
          return { ...data, _id: document._id };
        }
        return document;
      })
    );
  }

  static truncateCollection(collectionName: string) {
    this.writeCollection(collectionName, []);
  }

  static getDocument<T extends CommonDocument = CommonDocument>(
    collectionName: string,
    id: string
  ) {
    const collection = this.getCollection<T>(collectionName);
    return collection.find(({ _id }) => _id === id);
  }
}
