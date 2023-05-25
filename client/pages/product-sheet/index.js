import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import Image from "next/image";
import producto from '@/public/assets/img-prod-vendedor/prod-vendedor.png'


const productSheet = () => {
    return (
        <Layout>
            <Header/>
            <main className="p-4">
                <section id="producto">
                    <div>

                    </div>
                    <div>

                    </div>
                </section>
                <section id="productos-del-mismo-vendedor">
                    <div>
                        <h2 className="text-lg">
                            Más productos del mismo vendedor
                        </h2>
                    </div>
                    <div className="flex">
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                        <Image
                            className="me-2 my-4"
                            src={producto}
                            width={88}
                            height={88}
                            alt="producto"
                        />
                    </div>
                </section>
                <section id="preguntas-y-respuestas">

                </section>
            </main>
        </Layout>
    )
}

export default productSheet;