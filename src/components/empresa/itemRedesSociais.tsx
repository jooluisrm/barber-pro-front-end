import { RedeSocial } from "@/types/type";
import { BadgeCheck, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

type Props = {
    data: RedeSocial;
}

export const ItemRedesSociais = ({ data }: Props) => {
    return (
        <Link
            href={`${data.link}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="bg-[#F4F4F5] dark:bg-[#27272A] p-3 rounded-full">
                {
                    data.rede.toLowerCase() === "instagram" && <Instagram />
                }
                {
                    data.rede.toLowerCase() === "facebook" && <Facebook />
                }
                {
                    data.rede.toLowerCase() === "twitter" && <Twitter />
                }
                {
                    data.rede.toLowerCase() === "youtube" && <Youtube />
                }
                {
                    !["instagram", "facebook", "twitter", "youtube"].includes(data.rede.toLowerCase()) && <BadgeCheck />
                }
            </div>
        </Link>

    );
}