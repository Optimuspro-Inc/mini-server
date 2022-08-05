import { Test, TestingModule } from '@nestjs/testing';
import { NewsletterResolver } from './newsletter.resolver';
import { NewsletterService } from './newsletter.service';

describe('NewsletterResolver', () => {
  let resolver: NewsletterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsletterResolver, NewsletterService],
    }).compile();

    resolver = module.get<NewsletterResolver>(NewsletterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
