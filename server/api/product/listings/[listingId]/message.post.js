import Joi from 'joi';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const schema = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.required(),
	phone: Joi.string()
		.length(10)
		.pattern(/^[0-9]+$/),
	name: Joi.string().required(),
	message: Joi.string().min(20).required(),
});

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { error } = await schema.validate(body);
	const { listingId } = event.context.params;

	if (error) {
		throw createError({
			statusCode: 412,
			statusMessage: error.message,
		});
	}

	const { message, email, phone, name } = body;

	return await prisma.message.create({
		data: {
			message,
			email,
			phone,
			name,
			listingId: parseInt(listingId),
		},
	});
});
