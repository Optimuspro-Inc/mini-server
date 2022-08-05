import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterResolver } from './newsletter.resolver';

@Module({
  providers: [NewsletterResolver, NewsletterService]
})
export class NewsletterModule {}
