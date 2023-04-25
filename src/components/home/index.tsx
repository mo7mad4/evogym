import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section
            id="home"
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
        >
            {/* Image main header */}
            <div>
                {/* Main header */}
                <div>
                    {/* Headings */}
                    <div>
                        <div>
                            <div>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p>Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.</p>
                    </div>
                    {/* Actions */}
                    <div>
                        <ActionButton 
                            setSelectedPage={setSelectedPage}
                        >
                            Join Now
                        </ActionButton>
                    </div>
                </div>

                {/* Image */}
                <div></div>
            </div>

        </section>
    )
}

export default Home