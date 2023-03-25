import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductModel>;

class ProductCharacteristics {
	@Prop()
	name: string;
	@Prop()
	value: string;
}

@Schema()
export class ProductModel {
	@Prop()
	image: string;

	@Prop()
	title: string;

	@Prop()
	price: number;

	@Prop()
	oldPrice?: number;

	@Prop()
	credit: number;

	@Prop()
	description: string;

	@Prop()
	advantages: string;

	@Prop()
	disAdvantages: string;

	@Prop({ type: () => [String] })
	categories: string[];

	@Prop({ type: () => [String] })
	tags: string[];

	@Prop({ type: () => [ProductCharacteristics], _id: false })
	characteristics: ProductCharacteristics[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
