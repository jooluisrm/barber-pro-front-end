import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabLayout } from "./tabLayout";

type Props = {
    id: string | undefined;
}

export const EmpresaTabs = ({ id }: Props) => {
    return (
        <Tabs defaultValue="servicos" className="w-full mt-5">
            <TabsList>
                <TabsTrigger value="servicos">Serviços</TabsTrigger>
                <TabsTrigger value="profissionais">Profissionais</TabsTrigger>
                <TabsTrigger value="prudutos">Produtos</TabsTrigger>
                <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="servicos" >
                <TabLayout text="Serviços" type="services" id={id}/>
            </TabsContent>
            <TabsContent value="profissionais">
                <TabLayout text="Profissionais" type="profissionais" id={id}/>
            </TabsContent>
            <TabsContent value="prudutos">
                <TabLayout text="Produtos" type="products" id={id}/>
            </TabsContent>
            <TabsContent value="avaliacoes">
                <TabLayout text="Avaliações" type="avaliacao" id={id}/>
            </TabsContent>
        </Tabs>
    );
}