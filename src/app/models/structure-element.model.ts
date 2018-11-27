export interface StructureElement {
    active: boolean
    name: string
    template: number
    blocks: Block
}

export interface Block {
    type: BlockType
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

export enum BlockType {
    number = 'number',
    graph = 'graph',
    table = 'table'
}
