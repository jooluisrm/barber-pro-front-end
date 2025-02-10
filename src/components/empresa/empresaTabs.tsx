import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabLayout } from "./tabLayout";

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
                <TabLayout text="Serviços" type="services"/>
            </TabsContent>
            <TabsContent value="profissionais">
                <TabLayout text="Profissionais" type="profissionais"/>
            </TabsContent>
            <TabsContent value="prudutos">
                <TabLayout text="Produtos" type="products"/>
            </TabsContent>
            <TabsContent value="avaliacoes">
                <TabLayout text="Avaliações" type="avaliacao"/>
            </TabsContent>
        </Tabs>
    );
}