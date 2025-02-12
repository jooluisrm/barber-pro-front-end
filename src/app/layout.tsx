import { ReactNode } from "react";
import './globals.css';
import { HeaderTop } from "@/components/header/headerTop";
import { ThemeProvider } from "@/components/theme-provider";
import { MenuMobile } from "@/components/menuMobile/menuMobile";
import { Footer } from "@/components/footer/footer";
import { AuthProvider } from "@/contexts/AuthContext";

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <html>
            <body>
                <AuthProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >



                        <header className="border-b">
                            <HeaderTop />
                        </header>
                        <div className="mx-5 md:mx-0">
                            {children}
                        </div>
                        <footer className="border-t mb-20 md:mb-0">
                            <Footer />
                        </footer>
                        <div className="w-full dark:bg-black bg-white fixed bottom-0 md:hidden z-50">
                            <MenuMobile />
                        </div>
                    </ThemeProvider >
                </AuthProvider>
            </body>
        </html>
    );
}

export default Layout;