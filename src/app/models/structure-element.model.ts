export interface StructureElement {
    active: boolean
    name: string
    template: string
    blocks: Block
}

export interface Block {
    type: string
    source: number
}

export interface FormatData {
    timestamp: number
    value: number
}

export interface Source {
    id: number
    name: string
    type: SourceType
    url: string
}

export interface Connection {
    source: Source
    connection: WebSocket
}

export enum SourceType {
    ws
}
