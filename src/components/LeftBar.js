import Link from "next/link";
import Image from "next/image";

export default function LeftBar() {
    const menuList = [
        {
            id: 1,
            name: "Homepage",
            link: "/",
            icon: "home.svg",
        },
        {
            id: 2,
            name: "Explore",
            link: "/",
            icon: "explore.svg",
        },
        {
            id: 3,
            name: "Notification",
            link: "/",
            icon: "notification.svg",
        },
        {
            id: 4,
            name: "Messages",
            link: "/",
            icon: "message.svg",
        },
        {
            id: 5,
            name: "Bookmarks",
            link: "/",
            icon: "bookmark.svg",
        },
        {
            id: 6,
            name: "Jobs",
            link: "/",
            icon: "job.svg",
        },
        {
            id: 7,
            name: "Communities",
            link: "/",
            icon: "community.svg",
        },
        {
            id: 8,
            name: "Premium",
            link: "/",
            icon: "logo.svg",
        },
        {
            id: 9,
            name: "Profile",
            link: "/",
            icon: "profile.svg",
        },
        {
            id: 10,
            name: "More",
            link: "/",
            icon: "more.svg",
        },
    ];

    return (
        <div className='h-screen sticky top-0 flex flex-col justify-between pb-8 pt-2'>
            <div className=''>
                <Link className="hover:bg-[#181818] p-2 rounded-full" href='/'>
                    <Image src="icons/logo.svg" alt='logo' width={24} height={24}/>
                </Link>
                <div className='flex flex-col'>
                    {menuList.map((menu) => (
                        <Link className="p-2 gap-4 flex items-center rounded-full hover:bg-[#181818]" href={menu.link} key={menu.id}>
                            <Image src={`icons/${menu.icon}`} alt={menu.name} width={24} height={24}/>
                            <span className="hidden xl:inline">{menu.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
