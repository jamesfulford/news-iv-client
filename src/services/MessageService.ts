import ApiService from './ApiService';
import { Message, NewMessage } from "../models/message";

export default class MessageService {
    public static async getMessages (): Promise<Message[]> {
        return await ApiService.hit('GET', '/api/messages');
    }

    public static async postMessage (userId: string, message: NewMessage): Promise<Message> {
        return await ApiService.hit('POST', `/api/users/${userId}/messages`, message);
    }

    public static async deleteMessage (userId: string, message: Message): Promise<Message> {
        return await ApiService.hit('DELETE', `/api/users/${userId}/messages/${message._id}`);
    }
}
