import { Header, About, Services, Quality, Projects, Contact, Footer } from "@/layouts";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
};

export default Home;