import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsArr } from "../../utilits/icon.tsx";

const TabsComp = () => {
    return (
        <section className="dark:bg-[#111827] hidden xl:block pt-10 bg-white w-full">
            <div className="xl:w-[1200px] m-auto px-[15px] md:px-[30px] pb-[100px] items-center justify-center">
                <Tabs className="w-full border-[1px] rounded-lg dark:border-white border-black p-7" defaultValue="budget">
                    <TabsList className="">
                        {TabsArr.map((item: {name:string, value:string}, idx:number) => (
                            <TabsTrigger className="dark:text-white text-md data-[state=active]:text-white text-gray [state=active]:text-white" key={idx} value={item.value}>{item.name}</TabsTrigger>
                        ))}
                    </TabsList>

                    {TabsArr.map((item: {value:string, content:string}, idx:number) => (
                        <TabsContent className="px-5 py-2 text-sm tracking-wide text-black dark:text-white" key={idx} value={item.value}>
                            {item.content}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default TabsComp;