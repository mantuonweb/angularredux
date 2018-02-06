
export interface MessageState {
    type:string,
    time:Date,
    user:string,
    text:string,
    action:string
};
export interface Chat {
    chatid:number,
    type:string,
    user:string,
    Messages:any[]
};
export interface ChatState {
   chats:{}
};