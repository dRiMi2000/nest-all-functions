import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '5', description: 'ID пользовтеля, которого необходимо забанить'})
    readonly userId: number;
    @ApiProperty({example: 'Читер', description: 'Причина бана'})
    readonly banReason: string;
}