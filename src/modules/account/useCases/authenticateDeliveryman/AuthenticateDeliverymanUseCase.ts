import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { compare } from 'bcrypt';


interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
        // Receber o username, password
         

        // Varificar se username cadastrado
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if (!deliveryman) {
            throw new Error("Username or password invalid!");
        }

        // Verificar se a senha corresponde ao username
        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }

        // Gerar o token
        const token = sign({ username }, "7815696ecbf1c96e6894b779456d330e", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return {
            token
        };
    }
}