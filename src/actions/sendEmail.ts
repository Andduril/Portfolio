'use server';

import { Resend } from 'resend';
import { z } from 'zod';

type Status = 'success' | 'error';

export type SendEmailSuccess = {
  status: 'success';
  message: string;
};

export type SendEmailError = {
  status: 'error';
  errors: Record<string, string[]>;
};

export type SendEmailIdle = {
  status: 'idle';
};

const schema = z.object({
  name: z.string().min(1, 'NameError'),
  email: z.string().email('EmailError'),
  message: z.string().min(1, 'MessageError'),
});

export const sendEmail = async (
  initialState: any,
  formData: FormData
): Promise<SendEmailError | SendEmailSuccess | SendEmailIdle> => {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);

    return {
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'no-reply@anddy-labrut.fr',
      to: 'labrut.anddy@gmail.com',
      subject: `Portfolio - Contact from ${validatedFields.data.name}`,
      html: `<p>Hello from :${formData.get('message')}</p>`,
    });

    if (response.error) {
      return {
        status: 'error',
        errors: {
          message: ['ServerError'],
        },
      };
    }
  } catch (error) {
    return {
      status: 'error',
      errors: {
        message: ['ServerError'],
      },
    };
  }

  return {
    status: 'success',
    message: 'EmailSuccess',
  };
};
