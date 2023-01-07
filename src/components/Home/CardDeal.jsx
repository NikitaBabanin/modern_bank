import { card } from "../../assets/index.js";
import styles, { layout } from "../../style.js";
import Button from "../Button.jsx";

const CardDeal = () =>(
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="sm:block hidden" /> in few easy
                steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <Button to="login" title='Get Started' styles={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default CardDeal
