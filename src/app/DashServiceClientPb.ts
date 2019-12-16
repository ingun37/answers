/**
 * @fileoverview gRPC-Web generated client stub for dash
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  DeleteInfo,
  NewInfo,
  Void,
  WriteInfo} from './dash_pb';

export class DashClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoWrite = new grpcWeb.AbstractClientBase.MethodInfo(
    Void,
    (request: WriteInfo) => {
      return request.serializeBinary();
    },
    Void.deserializeBinary
  );

  write(
    request: WriteInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Void) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/dash.Dash/Write',
      request,
      metadata || {},
      this.methodInfoWrite,
      callback);
  }

  methodInfoNewItem = new grpcWeb.AbstractClientBase.MethodInfo(
    Void,
    (request: NewInfo) => {
      return request.serializeBinary();
    },
    Void.deserializeBinary
  );

  newItem(
    request: NewInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Void) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/dash.Dash/NewItem',
      request,
      metadata || {},
      this.methodInfoNewItem,
      callback);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    Void,
    (request: DeleteInfo) => {
      return request.serializeBinary();
    },
    Void.deserializeBinary
  );

  delete(
    request: DeleteInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Void) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/dash.Dash/Delete',
      request,
      metadata || {},
      this.methodInfoDelete,
      callback);
  }

}

