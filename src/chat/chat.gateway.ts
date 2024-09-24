import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(
    client: Socket,
    payload: { username: string; message: string },
  ): void {
    this.server.emit('message', payload);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, room: string): void {
    client.join(room);
    this.server.to(room).emit('message', {
      username: 'System',
      message: `User joined room: ${room}`,
    });
  }

  @SubscribeMessage('messageToRoom')
  handleMessageToRoom(
    client: Socket,
    payload: { room: string; username: string; message: string },
  ): void {
    this.server.to(payload.room).emit('message', payload);
  }
}
