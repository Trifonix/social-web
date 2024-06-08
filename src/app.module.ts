import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { Message } from './messages/entities/message.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'MySQL-8.2',
      port: 3306,
      username: 'root',
      password: '',
      database: 'social_web_db',
      entities: [User, Message],
      synchronize: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51', // В реальном приложении используйте переменные окружения
      signOptions: { expiresIn: 3600 }, // Время жизни токена (1 час)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
