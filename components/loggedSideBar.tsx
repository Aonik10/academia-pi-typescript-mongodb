import styles from "./styles/loggedSideBar.module.scss";
import {
    IconHome,
    IconShoppingCart,
    IconCalendarEvent,
    IconHelp,
    IconArrowBarToLeft,
    IconUserSearch,
} from "@tabler/icons-react";
import logo from "../assets/images/logos/Icono TRANS.png";
import Image from "next/image";
import Link from "next/link";

interface SideBarItemProp {
    href: string;
    content: string;
    icon: React.ReactNode;
}

function SideBarItem({ href, content, icon }: SideBarItemProp) {
    return (
        <Link href={href} className={styles.side_bar_item}>
            {icon}
            <div className={styles.side_bar_item_content}>{content}</div>
        </Link>
    );
}

function LoggedSideBar() {
    return (
        <div className={styles.logged_nav_bar}>
            <div className={styles.academy_logo}>
                <Image width="65" height="65" src={logo} alt="logo" />
            </div>
            <div className={styles.menu_container}>
                <div>
                    <SideBarItem
                        href={"/dashboard"}
                        content="Inicio"
                        icon={<IconHome className={styles.side_item_bar_logo} />}
                    />
                    <SideBarItem
                        href={"/dashboard/courses"}
                        content="Cursos"
                        icon={<IconShoppingCart className={styles.side_item_bar_logo} />}
                    />
                    <SideBarItem
                        href={"/dashboard"}
                        content="Proximos eventos"
                        icon={<IconCalendarEvent className={styles.side_item_bar_logo} />}
                    />
                    <SideBarItem
                        href={"/dashboard"}
                        content="Clases particulares"
                        icon={<IconUserSearch className={styles.side_item_bar_logo} />}
                    />
                </div>
                <div>
                    <SideBarItem
                        href={"/dashboard"}
                        content="Ayuda"
                        icon={<IconHelp className={styles.side_item_bar_logo} />}
                    />
                    <SideBarItem
                        href={"/dashboard"}
                        content=""
                        icon={<IconArrowBarToLeft className={styles.side_item_bar_logo} />}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoggedSideBar;
