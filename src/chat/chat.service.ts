import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) {}

  async saveMessage(
    room: string,
    username: string,
    message: string,
  ): Promise<Chat> {
    const chat = this.chatRepository.create({ room, username, message });
    return this.chatRepository.save(chat);
  }
}
