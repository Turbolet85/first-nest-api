import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.model';

@Module({
	controllers: [AuthController],
	imports: [
		MongooseModule.forFeature([
			{
				name: 'AuthSchema',
				schema: AuthSchema,
				collection: 'Auth',
			},
		]),
	],
})
export class AuthModule {}
