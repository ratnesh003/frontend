import { GiWallet } from "react-icons/gi"
import { IoWalletOutline } from "react-icons/io5"
import { LuLayoutDashboard } from "react-icons/lu"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { PiCubeBold } from "react-icons/pi"
import { RiDiscountPercentLine, RiQuestionnaireLine } from "react-icons/ri"
import { TbShoppingBag, TbUserSquare } from "react-icons/tb"

export const navitems = [
    {
        title: "dashboard",
        herf: "/",
        icon: LuLayoutDashboard
    },
    {
        title: "products",
        herf: "/products",
        icon: PiCubeBold
    },
    {
        title: "customers",
        herf: "/customers",
        icon: TbUserSquare
    },
    {
        title: "income",
        herf: "/income",
        icon: IoWalletOutline
    },
    {
        title: "promote",
        herf: "/promote",
        icon: RiDiscountPercentLine
    },
    {
        title: "help",
        herf: "/help",
        icon: RiQuestionnaireLine
    }
]

export const stats = [
    {
        title: "total requests",
        data: 12345,
        icon: MdOutlineCurrencyExchange,
        color: "green"
    },
    {
        title: "avg response time",
        data: 1.2,
        icon: GiWallet,
        color: "blue"
    },
    {
        title: "failed requests",
        data: 178,
        icon: TbShoppingBag,
        color: "red"
    }
]