import {Injectable} from '@angular/core';
import {Connection, Source, SourceType} from "../../models/structure-element.model";

@Injectable()
export class SourceService {
    connections: Connection[];

    constructor() {
        this.connections = [];
    }

    connect(source: Source) {
        let _this = this;
        let connection = this.getConnectionBySource(source);
        if (connection) {
            return connection;
        }
        switch (source.type) {
            case SourceType.ws:
                let ws = new WebSocket(source.url);
                connection = {
                    source: source,
                    connection: ws
                };
                _this.connections.push(connection);
                break;
            default:
                break;
        }
        return connection;
    }

    getConnectionBySource(source: Source): Connection {
        return this.connections.find(con => con.source.id === source.id);
    }
}
