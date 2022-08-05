import { Resolver } from '@nestjs/graphql';
import { NewsletterService } from './newsletter.service';

@Resolver('Newsletter')
export class NewsletterResolver {
  constructor(private readonly newsletterService: NewsletterService) {}
}
