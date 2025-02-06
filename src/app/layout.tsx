import { ReactNode } from "react";
import './globals.css';
import { HeaderTop } from "@/components/header/headerTop";
import { ThemeProvider } from "@/components/theme-provider";

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
                </ThemeProvider >
            </body>
        </html>
    );
}

export default Layout;