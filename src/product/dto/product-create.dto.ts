import { IsBoolean, IsString, Length } from 'class-validator';

export class ProductCreateDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsBoolean()
  new: boolean;
}
