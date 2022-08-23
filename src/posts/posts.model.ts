import { ApiProperty } from "@nestjs/swagger";
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Пост про кошек', description: 'Название поста' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({ example: 'Кошки - это...', description: 'Контент поста' })
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({ example: '12345.jpg', description: 'Имя изображения' })
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

}