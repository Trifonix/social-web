import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'yourSecretKey', // Замените это на ваш секретный ключ
      signOptions: { expiresIn: '1h' },
    }),
    // Другие импорты
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Экспортируем UsersService для использования в других модулях
})
export class UsersModule {}
