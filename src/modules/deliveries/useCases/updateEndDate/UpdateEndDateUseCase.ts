import { prisma } from "../../../../database/prismaClient";

interface IUpdateEndDate {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateEndDateUseCase {
    async execute({ id_delivery, id_deliveryman } : IUpdateEndDate) {

        var deliveryExists = await prisma.deliveries.findFirst({
            where: {
                id: id_delivery
            }
        });

        if (!deliveryExists){
            throw Error("Delivery is not exists!");
        }

        if (deliveryExists.id_deliveryman != id_deliveryman) {
            throw Error("Delivery does not belong to logged deliveryman!");
        }

        const delivery = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                end_at: new Date()
            }
        })

        return delivery;
    }
}