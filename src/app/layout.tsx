import { ReactNode } from "react";
import './globals.css';
import { HeaderTop } from "@/components/header/headerTop";

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <html>
            <body>
                <header>
                    <HeaderTop />
                </header>
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}

export default Layout;