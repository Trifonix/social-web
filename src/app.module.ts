import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    MessagesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'MySQL-8.2', // Имя хоста для OpenServer 6 версии, обычно: localhost
      port: 3306,
      username: 'root',
      password: '',
      database: 'social_web_db',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
