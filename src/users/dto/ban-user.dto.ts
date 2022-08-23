import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
    @ApiProperty({example: '5', description: 'ID пользовтеля, которого необходимо забанить'})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;
    @ApiProperty({example: 'Читер', description: 'Причина бана'})
    @IsString({message: "Должно быть строкой"})
    readonly banReason: string;
}