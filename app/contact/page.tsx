
"use client";

import ContactForm from '@/components/contactForm';


const Page = () => {
    return (
        <div className="flex items-center justify-center h-screen">  
            <div className="flex-auto md:flex-row items-center justify-center gap-8 p-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Formulaire de contact</h1>
                <ContactForm />
            </div>
        </div>         
    );
}

export default Page;
