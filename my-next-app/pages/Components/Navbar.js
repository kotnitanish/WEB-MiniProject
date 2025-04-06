import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbar}>

            <div className={styles.navleft}>
                    Event Planners For Students
            </div>

            <div className={styles.navright}>

                <div className={styles.bottom}>

                    <ul className={styles.navLinks}>


                        <li className={styles.btcnt}>
                            <Link href="/index" className={styles.button}>
                                <span >Home</span>
                            </Link>

                        </li>

                        <li className={styles.btcnt}>
                            <Link href="/Components/Eventslisting" className={styles.button}>
                                <span>Events</span>
                            </Link>

                        </li>

                        <li className={styles.btcnt}>
                            <Link href="/Components/EventOrganisers" className={styles.button}>
                                <span>Events Organisiner</span>
                            </Link>

                        </li>

                        <li className={styles.btcnt}>
                            <Link href="/Components/ContactUs" className={styles.button}>
                                <span>Contact us</span>
                            </Link>

                        </li>


                    </ul>

                </div>

            </div>


        </div>
    )
}
export default Navbar
