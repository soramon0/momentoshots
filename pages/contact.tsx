import type { FormEventHandler } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import useForm from '@/lib/useForm';
import { useCreateContact } from '@/graphql/query/contact';
import Notifier from '@/components/Notifier';

function ContactPage() {
  const { inputs, onChange, clearForm } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [createContact, { loading, error }] = useCreateContact(() => ({
    variables: inputs,
  }));

  const sendContactMessage: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await createContact();
      clearForm();
    } catch {}
  };

  return (
    <main>
      <Head>
        <title>Momento Shots - Contact Us</title>
      </Head>
      <Notifier error={error} type={error ? 'Error' : 'Success'} />

      <div className="text-center p-4">
        <Link href="/">Back Home</Link>
      </div>

      <form
        method="post"
        className="max-w-4xl mx-auto m-4"
        onSubmit={sendContactMessage}
      >
        <fieldset
          className="bg-gray-50 shadow-sm p-4 space-y-4"
          disabled={loading}
          aria-busy={loading}
        >
          <div className="sm:flex sm:space-x-6">
            <div className="flex-1 space-y-2">
              <label htmlFor="name" className="block">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={inputs.name}
                  onChange={onChange}
                  className="block w-full p-2 rounded-md"
                />
              </label>
              <label htmlFor="name" className="block">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={inputs.email}
                  onChange={onChange}
                  className="block w-full p-2 rounded-md"
                />
              </label>
              <label htmlFor="name" className="block">
                Phone
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={inputs.phone}
                  onChange={onChange}
                  className="block w-full p-2 rounded-md"
                />
              </label>
            </div>

            <div className="flex-1">
              <label htmlFor="name">
                Message
                <textarea
                  rows={7}
                  name="message"
                  placeholder="Your Message"
                  value={inputs.message}
                  onChange={onChange}
                  className="block w-full p-2 rounded-md"
                />
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold tracking-wide py-2 px-6 rounded-md"
            >
              Send Message
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default ContactPage;
