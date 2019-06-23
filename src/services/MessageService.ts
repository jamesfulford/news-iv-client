import ApiService from './ApiService';
import { Message } from '../models/message';

export default class MessageService {
    public static async getMessages (): Promise<Message[]> {
        return await ApiService.hit('GET', '/api/messages');
    }
}
