import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { compare } from 'bcrypt';


interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        // Receber o username, password
         

        // Varificar se username cadastrado
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if (!client) {
            throw new Error("Username or password invalid!");
        }

        // Verificar se a senha corresponde ao username
        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }

        // Gerar o token
        const token = sign({ username }, "9da2666f41b477f4fd7be2a3734ab003", {
            subject: client.id,
            expiresIn: "1d"
        });

        return {
            token
        };
    }
}