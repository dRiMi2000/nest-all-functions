import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> { //если вернётся true то доступ разрешён
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization; //Хедер состоит из двух частей
            const bearer = authHeader.split(' ')[0]       //Тип токена
            const token = authHeader.split(' ')[1]        //Сам токен

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        } catch (e) {
            throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
        }
    }

}