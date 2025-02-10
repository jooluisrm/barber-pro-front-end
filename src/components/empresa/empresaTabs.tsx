import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmpresaTabServico } from "./empresaTabServico";

export const EmpresaTabs = () => {
    return (
        <Tabs defaultValue="servicos" className="w-full mt-5">
            <TabsList>
                <TabsTrigger value="servicos">Serviços</TabsTrigger>
                <TabsTrigger value="profissionais">Profissionais</TabsTrigger>
                <TabsTrigger value="prudutos">Produtos</TabsTrigger>
                <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="servicos">
                <EmpresaTabServico />
            </TabsContent>
            <TabsContent value="profissionais">Change your password here.</TabsContent>
            <TabsContent value="prudutos">Make changes to your account here.</TabsContent>
            <TabsContent value="avaliacoes">Change your password here.</TabsContent>
        </Tabs>
    );
}