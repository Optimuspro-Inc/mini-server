import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument =  & Document;

@Schema({
  timestamps: true
})
export class User {
  @Prop({ unique: true, required: true })
  username: string;
  @Prop({ unique: true, required: true })
  email: string;
  @Prop({ default: false })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User)