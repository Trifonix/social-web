import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя пользователя', example: 'Ivan' })
  username: string;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'nikanorov@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'superPuperPass',
  })
  password: string;
}
