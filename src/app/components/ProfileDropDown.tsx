"use client"
import { useState } from "react";
import Link from "next/link";
// components
import { useAuthStore } from "../store/useAuthStore";
// styles
import styles from "./ProfileDropDown.module.css"
// assets
import { FaUser, FaUserCog, FaShoppingBag, FaHeart, FaSignOutAlt  } from "react-icons/fa"

export default function ProfileDropDown () {
    const [isActive, setIsActive] = useState<boolean>(false);

    const {isAuthenticated, logout} = useAuthStore();

    const handleDropDrown = () => {
        setIsActive(true);
        if(isActive) setIsActive(false)
    }
    

    return(
        <div className={styles.container}>
            <div onClick={handleDropDrown} className={styles.button}>
                <FaUser />
            </div>
            {isActive ? (
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link className={styles.link} href={"/#"}> 
                        <FaUserCog className={styles.icon} />
                        Perfil
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.link} href={"/#"}> 
                        <FaShoppingBag className={styles.icon} />
                        Mis compras
                        </Link>
                    </li>
                    <li onClick={logout}  className={styles.li}>
                        <Link className={styles.link} href={"/#"}> 
                            <FaSignOutAlt className={styles.icon} />
                            Cerrar sesion
                        </Link>
                    </li>

                </ul>
            )
            : <></>
        }
        </div>
    )
}