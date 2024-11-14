'use client';

function FormInput({
    id,
    label,
    type = "text",
}: {
    id: string;
    label: string;
    type?: string;
}) {
    return (
        <div className="">
            <label htmlFor={id} className="mb-2 block text-[#8D8D8D]">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                style={{ borderBottom: "1px solid #8D8D8D" }}
                className="mb-3 w-full focus:border-b focus:border-b-primary-500 focus:outline-none"
            />
        </div>
    );
}

function RadioOption({
    id,
    label,
}: {
    id: string;
    label: string;
}) {
    return (
        <div className="flex items-center gap-x-2.5">
            <input type="radio" id={id} name="subject" value={id} />
            <label htmlFor={id} className="text-[#8D8D8D]">
                {label}
            </label>
        </div>
    );
}

export default function ContactForm() {
    return (
        <section className="-mx-4 md:-mx-20 bg-primary-50 pb-12 md:pb-16 pt-6 md:pt-9">
            <h2 className="mb-6 md:mb-9 text-center text-3xl md:text-5xl font-bold">Send Message</h2>

            <form className="mx-auto mb-8 md:mb-12 rounded-3xl bg-white px-4 md:px-[6.25rem] py-6 md:py-10">
                <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-11">
                    <FormInput id="firstName" label="First Name" />
                    <FormInput id="lastName" label="Last Name" />
                    <FormInput id="email" label="Email" />
                    <FormInput id="phone" label="Phone Number" />

                    <div className="w-full">
                        <p className="mb-3.5">Select Subject?</p>
                        <div className="flex flex-wrap gap-4 md:gap-x-5">
                            <RadioOption id="generalEnquiry" label="General Enquiry" />
                            <RadioOption id="consultancy" label="Consultancy" />
                        </div>
                    </div>
                    <div></div>

                    <div className="w-full col-span-2 grow">
                        <label htmlFor="message" className="mb-2 block text-[#8D8D8D]">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            style={{ borderBottom: "1px solid #8D8D8D" }}
                            className="mb-3 w-full focus:border-b focus:border-b-primary-500 focus:outline-none"
                            placeholder="Write your message..."
                        />
                    </div>

                    <div className="col-span-2 text-center">
                        <button type="submit" className="w-full max-w-[603px] rounded-lg bg-primary-500 py-3 text-primary-50">
                            SEND MESSAGE
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}
