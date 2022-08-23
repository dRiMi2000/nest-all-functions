import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'USER', description: 'Название роли'})
    @IsString({message: "Должно быть строкой"})
    readonly value: string;

    @ApiProperty({example: 'Обычный пользователь', description: 'Описание роли'})
    @IsString({message: "Должно быть строкой"})
    readonly description: string;
}