import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section>
        <ContactHero />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <ContactInfo />
      </section>
    </main>
  );
}
