import Joi from 'joi';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const schema = Joi.object({
	name: Joi.string().required(),
	slug: Joi.string().required(),
	description: Joi.string().required().min(20),
	color: Joi.string().required(),
	type: Joi.string().required(),
	condition: Joi.string().required(),
	brand: Joi.string().required(),
	gender: Joi.string().required().max(1),
	size: Joi.string().required().max(2),
	image: Joi.string().required(),
	listerId: Joi.string().required(),
	price: Joi.number().required().min(0),
});

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const { error, value } = await schema.validate(body);

	if (error) {
		throw createError({
			statusCode: 412,
			statusMessage: error.message,
		});
	}

	const {
		image,
		name,
		color,
		price,
		brand,
		description,
		listerId,
		gender,
		condition,
		type,
		size,
	} = body;

	const product = await prisma.product.create({
		data: {
			image,
			name,
			slug: name.toLowerCase().replace(/ /g, '-'),
			color,
			price,
			brand,
			description,
			listerId,
			gender,
			condition,
			type,
			size,
		},
	});

	return product;
});
