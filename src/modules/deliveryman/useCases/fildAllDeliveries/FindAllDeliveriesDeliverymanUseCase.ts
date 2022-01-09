import { prisma } from "../../../../database/prismaClient";

interface IFindAllDeliveries {
    id_deliveryman: string;
}

export class FindAllDeliveriesDeliverymanUseCase {
    async execute({ id_deliveryman }: IFindAllDeliveries) {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_deliveryman
            }
        });

        return deliveries;
    }
}