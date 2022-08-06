import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { isEmail } from 'src/users/util/util';
import { NewsLetter, NewsLetterDocument } from './schema/newletter';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectModel(NewsLetter.name) private readonly newsLetterModel: Model<NewsLetterDocument>,
  ){}

 async letters(): Promise<NewsLetterDocument[]> {
    const letters = await this.newsLetterModel.find()
    return letters
  }

  async join({ email }): Promise<NewsLetterDocument> {
    try {
      if(!isEmail(email)) throw new BadRequestException('Use a valid email')

      const emailOnNewsLetter = await this.newsLetterModel.findOne({ email: email })
      if(emailOnNewsLetter) throw new BadRequestException('Email already added to newsletter')
      
      const user = await this.newsLetterModel.create({email})
      return user
    } catch (error) {
      throw error
    }
  }
}
