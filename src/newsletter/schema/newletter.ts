import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsLetterDocument =  & Document;

@Schema({
  timestamps: true
})
export class NewsLetter {
  @Prop({ unique: true, required: true })
  email: string;
}

export const NewsLetterSchema = SchemaFactory.createForClass(NewsLetter)