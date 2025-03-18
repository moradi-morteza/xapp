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
            {/*LOGO MENU BUTTON*/}
            <div className='flex flex-col gap-4 text-lg items-center'>
                <Link className="hover:bg-[#181818] p-2 rounded-full" href='/'>
                    <Image src="icons/logo.svg" alt='logo' width={24} height={24}/>
                </Link>
                {/*MENU LIST*/}
                <div className='flex flex-col'>
                    {menuList.map((menu) => (
                        <Link className="p-2 gap-4 flex items-center rounded-full hover:bg-[#181818]" href={menu.link}
                              key={menu.id}>
                            <Image src={`icons/${menu.icon}`} alt={menu.name} width={24} height={24}/>
                            <span className="hidden xl:inline">{menu.name}</span>
                        </Link>
                    ))}
                </div>
                {/*BUTTON*/}
                <Link href="/" className="bg-white text-black rounded-full font-bold w-12 h-12 justify-center items-center flex xl:hidden">
                    <Image src="icons/post.svg" alt="new post" width={24} height={24}/>
                </Link>
                <Link href="/" className="hidden xl:block bg-white text-black rounded-full font-bold py-2 px-20 mx-1">
                    Post
                </Link>
            </div>


            {/* USER */}
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image  alt="lama dev" width={80} height={80} src="/general/avatar.png"/>
                    </div>
                    <div className="hidden xl:flex flex-col">
                        <span className="font-bold">Lama Dev</span>
                        <span className="text-sm text-textGray">@lamaWebDev</span>
                    </div>
                </div>
                <div className="hidden xl:block cursor-pointer font-bold">...</div>
            </div>

        </div>
    );
}
