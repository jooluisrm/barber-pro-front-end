import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ButtonLogin } from "./buttonLogin";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Login } from "./login";

export const DialogRegister = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ButtonLogin />
            </DialogTrigger>
            <DialogContent>
                <Login />
            </DialogContent>
        </Dialog>
    );
}
