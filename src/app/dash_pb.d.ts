import * as jspb from "google-protobuf"

export class WriteInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getAttr(): string;
  setAttr(value: string): void;

  getAccount(): Account | undefined;
  setAccount(value?: Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WriteInfo): WriteInfo.AsObject;
  static serializeBinaryToWriter(message: WriteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteInfo;
  static deserializeBinaryFromReader(message: WriteInfo, reader: jspb.BinaryReader): WriteInfo;
}

export namespace WriteInfo {
  export type AsObject = {
    path: string,
    attr: string,
    account?: Account.AsObject,
  }
}

export class Account extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    value: string,
    parent: string,
  }
}

export class NewInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getItem(): Item | undefined;
  setItem(value?: Item): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NewInfo): NewInfo.AsObject;
  static serializeBinaryToWriter(message: NewInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewInfo;
  static deserializeBinaryFromReader(message: NewInfo, reader: jspb.BinaryReader): NewInfo;
}

export namespace NewInfo {
  export type AsObject = {
    path: string,
    item?: Item.AsObject,
  }
}

export class Item extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    title: string,
  }
}

export class Void extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Void.AsObject;
  static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
  static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Void;
  static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
  export type AsObject = {
  }
}

export class RouteSummary extends jspb.Message {
  getPointCount(): number;
  setPointCount(value: number): void;

  getFeatureCount(): number;
  setFeatureCount(value: number): void;

  getDistance(): number;
  setDistance(value: number): void;

  getElapsedTime(): number;
  setElapsedTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteSummary.AsObject;
  static toObject(includeInstance: boolean, msg: RouteSummary): RouteSummary.AsObject;
  static serializeBinaryToWriter(message: RouteSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteSummary;
  static deserializeBinaryFromReader(message: RouteSummary, reader: jspb.BinaryReader): RouteSummary;
}

export namespace RouteSummary {
  export type AsObject = {
    pointCount: number,
    featureCount: number,
    distance: number,
    elapsedTime: number,
  }
}

