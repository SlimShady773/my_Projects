import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './doctors/doctors.module';
import { databaseConfig } from './databaseConfig';
import { TimingsModule } from './timings/timings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    DoctorsModule,
    TimingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
