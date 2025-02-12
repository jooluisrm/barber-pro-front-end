"use client"

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ButtonLogin } from "./buttonLogin";
import { Login } from "./login";
import { Register } from "./register";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/contexts/AuthContext";


export const DialogRegister = () => {
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);

    const { user, token } = useAuth();

    const nextPage = () => {
        if (page < 2) {
            setPage(page + 1);
        }
    }
    const backPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const openModal = () => {
        setModalOpen(!modalOpen);
        setPage(1);
    }

    useEffect(() => {
        setModalOpen(false);
    }, [user, token])

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>

                <ButtonLogin openModal={openModal} />

            </DialogTrigger>
            <DialogContent className="w-[400px] md:w-full">
                {page == 1 && <Login nextPage={nextPage} />}
                {page == 2 && <Register backPage={backPage} />}
            </DialogContent>
        </Dialog>
    );
}
