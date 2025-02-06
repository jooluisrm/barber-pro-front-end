import { ReactNode } from "react";
import './globals.css';
import { HeaderTop } from "@/components/header/headerTop";
import { ThemeProvider } from "@/components/theme-provider";
import { MenuMobile } from "@/components/menuMobile/menuMobile";
import { Footer } from "@/components/footer/footer";

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <html>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header>
                        <HeaderTop />
                    </header>
                    <div>
                        {children}
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                    <div className="w-full fixed pb-5  bottom-0 md:hidden">
                        <MenuMobile />
                    </div>
                </ThemeProvider >
            </body>
        </html>
    );
}

export default Layout;