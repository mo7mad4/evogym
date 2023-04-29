import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import HText from '@/shared/HText';

const benefits :Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt magni odio, illum molestias nostrum incidunt repellat fugit similique, facere maiores ipsa, sed at qui mollitia ad quos consequatur amet."
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt magni odio, illum molestias nostrum incidunt repellat fugit similique, facere maiores ipsa, sed at qui mollitia ad quos consequatur amet."
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt magni odio, illum molestias nostrum incidunt repellat fugit similique, facere maiores ipsa, sed at qui mollitia ad quos consequatur amet."
    }

]
type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id='benefits'
            className='mx-auto min-h-full w-5/6 py-20'
        >

            <motion.div
                onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header section */}
                <div className='md:my:-5 md:w-3/5'> 
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>
                {/* Benefit section */}

                <div className='md:flex items-center justify-between gap-8 mt:flex'>
                    {/* {benefits.map((benefit)=> <benefits />)} */}
                    {benefits.map((benefit: BenefitType)=>(
                        <Benefit 
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            serSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>

            </motion.div>
        </section>

    )
}

export default Benefits