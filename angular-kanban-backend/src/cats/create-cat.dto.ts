import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly breed: string;

  @IsInt()
  readonly age: number;
}
