import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewsletterService } from './newsletter.service';

@Resolver('Newsletter')
export class NewsletterResolver {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Query()
  newsLetters() {
    return this.newsletterService.letters()
  }

  @Mutation()
  joinLetter(@Args() data) {
    return this.newsletterService.join(data)
  }
}
