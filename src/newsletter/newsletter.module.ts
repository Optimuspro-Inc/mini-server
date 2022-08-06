import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterResolver } from './newsletter.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsLetter, NewsLetterSchema } from './schema/newletter';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NewsLetter.name, schema: NewsLetterSchema }
    ])
  ],
  providers: [NewsletterResolver, NewsletterService]
})
export class NewsletterModule {}
