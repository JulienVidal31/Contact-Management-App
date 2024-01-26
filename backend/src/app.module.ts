import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'nestngdb',
      username: 'postgres',
      password: 'juju3.1IUT',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],

  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}
