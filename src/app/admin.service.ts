import { Injectable } from '@angular/core';
import * as grpcWeb from 'grpc-web';
import * as grpc from './DashServiceClientPb';
import * as grpcTypes from './dash_pb';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  client: grpc.DashClient;
  public newItem(path: string, title: string): Promise<void> {
    const request = new grpcTypes.NewInfo();
    request.setPath(path);

    const item = new grpcTypes.Item();
    item.setTitle(title);

    request.setItem(item);
    return new Promise((resolve, reject) => {
      const call = this.client.newItem(request, null, (err, _) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  public save(path: string, attr: string, parentAccount: string, content: string): Promise<void> {
    const request = new grpcTypes.WriteInfo();
    request.setPath(path);
    request.setAttr(attr);

    const account = new grpcTypes.Account();
    account.setParent(parentAccount);
    account.setValue(content);

    request.setAccount(account);

    return new Promise((resolve, reject) => {
      const call = this.client.write(request, null, (err, rsp) => {
        if (err) {
          console.error('grpc call fail: ');
          console.error(err);
          reject(err);
        } else {
          resolve();
        }
      });
      call.on('status', (status: grpcWeb.Status) => {
        console.log('status: ');
        console.log(status);
      });
    });
  }
  constructor() {
    this.client = new grpc.DashClient('http://192.168.35.5:8080', null, null);
  }
}
