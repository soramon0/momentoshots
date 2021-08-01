import { FormEventHandler, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { useCreateContact } from '@/lib/http';
import useForm from '@/lib/useForm';
import IconPhone from '@/components/icons/Phone';
import IconMail from '@/components/icons/Mail';
import IconLocation from '@/components/icons/Location';
import Input from '@/components/shared/Input';
import TextAria from '@/components/shared/TextAria';
import Notifier from '@/components/shared/Notifier';

function ContactPage() {
  const [showNotifier, setShowNotifier] = useState(false);
  const { inputs, onChange, resetFrom } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { createContact, errors, loading } = useCreateContact(inputs);

  const sendContactMessage: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { errors } = await createContact();

    if (!errors) {
      resetFrom();
      setShowNotifier(true);
    }
  };

  return (
    <motion.main className="mb-12" exit={{ opacity: 0 }}>
      <Head>
        <title>Momento Shots - Contact Us</title>
      </Head>

      <Notifier
        message="Yay! you did it. Will Reach back to you soon."
        show={showNotifier}
        toggler={setShowNotifier}
      />

      <section className="px-4 mt-8 space-y-8 md:px-12 md:mt-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
        <div>
          <span className="text-lg text-secondary sm:text-xl lg:text-2xl">
            Get in touch
          </span>
          <h1 className="mt-4 text-2xl font-display capitalize text-secondary sm:text-3xl lg:text-4xl">
            Schudle a shooting session
          </h1>

          <ul className="mt-8 md:mt-16 space-y-6">
            <li className="flex space-x-2">
              <IconPhone />
              <span
                className="font-semibold text-gray-700 tracking-wide"
                aria-label="phone number: 052615615"
              >
                052615615
              </span>
            </li>
            <li className="flex space-x-2">
              <IconMail />
              <span
                className="font-semibold text-gray-700 tracking-wide"
                aria-label="phone number: 052615615"
              >
                oumaima@gmail.com
              </span>
            </li>
            <li className="flex space-x-2">
              <IconLocation />
              <span
                className="font-semibold text-gray-700 tracking-wide"
                aria-label="phone number: 052615615"
              >
                Marrakech, Morocco
              </span>
            </li>
          </ul>
        </div>
        <form
          method="post"
          className="p-8 max-w-4xl w-full shadow rounded-2xl md:p-8"
          onSubmit={sendContactMessage}
        >
          <fieldset
            disabled={loading}
            aria-busy={loading}
            className="space-y-4"
          >
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
              <Input
                name="name"
                label="Full Name"
                placeholder="Your Full Name"
                value={inputs.name}
                onChange={onChange}
                error={errors?.name}
              />
              <Input
                name="phone"
                label="Phone"
                placeholder="Your Phone"
                value={inputs.phone}
                onChange={onChange}
                error={errors?.phone}
              />
            </div>

            <div>
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Your Email"
                value={inputs.email}
                onChange={onChange}
                error={errors?.email}
              />
            </div>
            <div className="col-span-2 row-span-2">
              <TextAria
                rows={7}
                name="message"
                label="Message"
                value={inputs.message}
                onChange={onChange}
                error={errors?.message}
                placeholder="Your Message"
              />
            </div>

            <button className="w-52 py-3 px-6 text-center font-display text-white bg-secondary transition-colors hover:bg-gray-800 hover:text-gray-200 rounded-md focus:outline-none focus:bg-gray-800 focus:text-gray-200">
              Book
            </button>
          </fieldset>
        </form>
      </section>
    </motion.main>
  );
}

export default ContactPage;
