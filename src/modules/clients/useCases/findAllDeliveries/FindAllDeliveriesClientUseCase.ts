import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveries {
    id_client: string;
}

export class FindAllDeliveriesClientUseCase {
    async execute({ id_client }: IFindAllDeliveries) {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_client
            }
        });

        return deliveries;
    }
}