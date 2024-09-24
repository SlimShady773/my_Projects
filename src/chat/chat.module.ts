import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat.entity';

@Module({
  providers: [ChatService, ChatGateway],
  imports: [TypeOrmModule.forFeature([Chat])],
})
export class ChatModule {}
