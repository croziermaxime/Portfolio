import {useState, useRef} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {styles} from "../styles.js";
import {EarthCanvas} from "../components";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion.js";

//template_7fimbhs
//service_7f9ni0u
//mgol_VYnlQrl3OIfc

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    );
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_7f9ni0u', 'template_7fimbhs', {from_name: form.name, to_name: 'Maxime', from_email: form.email, to_email: 'maximecrozier09@gmail.com', message: form.message}, 'mgol_VYnlQrl3OIfc')
            .then((result) => {
                setLoading(false);
                alert('Message sent successfully');
                setForm({
                    name: "",
                    email: "",
                    message: "",
                })
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert('Message failed to send');
            });
    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <button type="submit"
                            className="bg-tertiary py-3 px-8 w-fit text-white rounded-lg outline-none border-none font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
            className="xl:flex-1 xl
            h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");