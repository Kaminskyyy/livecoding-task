import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class ProductUpdateDto {
  @IsOptional()
  @IsString()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @IsBoolean()
  new?: boolean;
}
