'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';

const formSchema = z.object({
	email: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters.',
		})
		.refine((email) => isValidEmail(email), {
			message: 'Invalid email address',
		}),
	message: z.string().min(20, {
		message: 'Username must be at least 20 characters.',
	}),
});

const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			message: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const data = {
			email: values.email,
			message: values.message,
		};

		const { data: response } = await axios.post(
			'/api/contact',
			{
				data,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		console.log(response);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="example@email.com" className="dark:bg-neutral-800 dark:placeholder:text-opacity-60" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder="Write a message..." className="resize-none dark:placeholder:text-opacity-60" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</Form>
	);
};
