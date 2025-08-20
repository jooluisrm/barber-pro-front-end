import { ReactNode } from "react";
import './globals.css';
import { HeaderTop } from "@/components/header/headerTop";
import { ThemeProvider } from "@/components/theme-provider";
import { MenuMobile } from "@/components/menuMobile/menuMobile";
import { Footer } from "@/components/footer/footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

type Props = {
    children: ReactNode;
}

export const metadata: Metadata= {
  title: "BarberPro",
  description: "Sistema de agendamento e gestão para barbearias",
  icons: {
    icon: "/favicon.png", // ✅ arquivo na pasta /public
    shortcut: "/favicon.ico", // navegadores antigos
    apple: "/apple-touch-icon.png", // iOS homescreen
  },
  openGraph: {
    title: "BarberPro",
    description: "Agende seu horário de forma prática e rápida",
    siteName: "BarberPro",
    images: [
      {
        url: "./favicon.png",
        width: 500,
        height: 500,
        alt: "BarberPro - Gestão para Barbearias",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

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
                        <Toaster />
                    </ThemeProvider >
                </AuthProvider>
            </body>
        </html>
    );
}

export default Layout;