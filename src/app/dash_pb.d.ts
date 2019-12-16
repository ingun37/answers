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

export class ItemInfo extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ItemInfo): ItemInfo.AsObject;
  static serializeBinaryToWriter(message: ItemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemInfo;
  static deserializeBinaryFromReader(message: ItemInfo, reader: jspb.BinaryReader): ItemInfo;
}

export namespace ItemInfo {
  export type AsObject = {
    path: string,
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

