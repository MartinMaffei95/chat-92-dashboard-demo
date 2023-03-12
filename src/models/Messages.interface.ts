export interface Message {
  id: number;
  body: string;
  source: string;
  actions?: null | [];
  date: number;
  type: string;
}
export interface EndpointMessage {
  id: number;
  body: string;
  source: string;
  actions?: null | [];
  date: number;
  type: string;
}
