import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section id="about" className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gra-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4" >
          <p className="">
            Tempor ullamco ex eiusmod enim quis nisi exercitation voluptate culpa dolore. Adipisicing elit deserunt amet dolore aute culpa nisi tempor adipisicing cillum ea ut. Ullamco deserunt do aliquip sit adipisicing quis commodo culpa.
          </p>
          <p>
            Occaecat aliqua aliqua nisi et non velit quis. Eu excepteuconsequat. Ad pariatur ut excepteur veniam magna sint eiusmod tempor in tempor. Duis in qui ad tempor irure tempor incididunt reprehenderit reprehenderit anim.
          </p>
          <p>
            Occaecat aliqua aliqua nisi  pariatur ut excepteur veniam magna sint eiusmod tempor in tempor. Duis in qui ad tempor irure tempor incididunt reprehenderit reprehenderit anim.
          </p>
        </div>
      </section>
      <section id="contact" className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t Hesitate'} mainHeader={'Contact us'} />
        <div className="mt-8">

          <a className="text-4xl underline text-gray-500" href="tel:+46123123123">+46 123 123 123</a>
        </div>
        <h></h>
      </section>


    </>
  )
}
