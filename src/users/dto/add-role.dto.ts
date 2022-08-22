import { ApiProperty } from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'название роли'})
    @IsString({message: "Должно быть строкой"})
    readonly value: string;

    @ApiProperty({example: '5', description: 'ID пользователя для выдачи роли'})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;
}