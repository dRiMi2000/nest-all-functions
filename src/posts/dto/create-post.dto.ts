import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Пост про кошек', description: 'Заголовок поста'})
    @IsString({message: "Должно быть строкой"})
    readonly title: string;

    @ApiProperty({example: 'Кот - это...', description: 'Контент поста'})
    @IsString({message: "Должно быть строкой"})
    readonly content: string;

    @ApiProperty({example: '5', description: 'ID пользователя'})
    readonly userId: number;
}