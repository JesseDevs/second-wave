import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { listingId } = event.context.params;
	return await prisma.product.findUnique({
		where: {
			id: parseInt(listingId),
		},
	});
});
