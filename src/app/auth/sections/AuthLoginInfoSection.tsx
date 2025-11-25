import { FeatureCard, StepCard, TabButton, TestimonialSlider, TextComponent } from "@shared/components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface InfoSection {
  icon: string;
  title: string;
  description: string;
}

interface Opinion {
  logo?: string;
  rate: number;
  description: string;
  name: string;
}

type SectionType = "features" | "howItWorks";

const FEATURES: InfoSection[] = [
  {
    icon: "pi-shield",
    title: "Tylko zweryfikowani fachowcy",
    description: "Dbamy o Twoje bezpieczeństwo. Sprawdzamy każdego wykonawcę, abyś miał pewność najlepszych usług.",
  },
  {
    icon: "pi-dollar",
    title: "Jasne ceny od początku",
    description: "Zanim się skontaktujesz, sprawdź szacunkowe koszty usług. Bez niespodzianek!",
  },
  {
    icon: "pi-clock",
    title: "Szybka dostępność i wolne terminy",
    description:
      "Potrzebujesz pomocy dziś lub jutro? Łatwo znajdziesz wolne daty i godziny, które pasują do Twojego grafiku.",
  },
  {
    icon: "pi-eye",
    title: "Twoja prywatność to podstawa",
    description: "Chronimy Twoje dane. Kontakt do wykonawcy otrzymasz dopiero po akceptacji zlecenia.",
  },
  {
    icon: "pi-map-marker",
    title: "Wykonawcy z Twojej okolicy",
    description: "Usługi dostępne wyłącznie na terenie Krakowa – szybki dojazd i znajomość lokalnych realiów.",
  },
];

const STEPS: InfoSection[] = [
  {
    icon: "pi-users",
    title: "Wybierz rolę: Klient lub Wykonawca",
    description: "Dostosowujemy interfejs do Twoich potrzeb",
  },
  {
    icon: "pi-sign-in",
    title: "Załóż darmowe konto przez Google lub Facebook.",
    description: "Szybki i bezpieczny dostęp do platformy",
  },
  {
    icon: "pi-search",
    title: "Umów wizytę i zapomnij o problemie!",
    description: "Rozpocznij współpracę już dziś",
  },
];

const OPINIONS: Opinion[] = [
  {
    logo: "https://placehold.co/40x40/ef4444/ffffff?text=AK",
    rate: 5,
    description: "Świetna platforma! Szybko znalazłam fachowca do naprawy usterki w łazience. Polecam każdemu!",
    name: "Anna Kowalska",
  },
  {
    logo: "https://placehold.co/40x40/22c55e/ffffff?text=TM",
    rate: 4,
    description: "Bardzo intuicyjny interfejs, łatwo umówić wizytę. Fachowiec dotarł punktualnie i wszystko załatwił.",
    name: "Tomasz Miler",
  },
  {
    logo: "https://placehold.co/40x40/3b82f6/ffffff?text=ZP",
    rate: 5,
    description: "Wreszcie koniec z szukaniem fachowców po znajomych! FixApp to oszczędność czasu i nerwów.",
    name: "Zuzanna Piotrowska",
  },
];

export const AuthLoginInfoSection = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("features");

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-700)] p-8 text-white">
      <div className="relative z-10 mb-24">
        <TextComponent
          element="h1"
          color="white"
          weight="extrabold"
          className="mb-4 text-3xl leading-tight tracking-tight md:text-4xl"
        >
          Zaufany wykonawca w obrębie Krakowa – zamów w kilka minut
        </TextComponent>
        <TextComponent element="h5" color="white" weight="normal" className="text-lg opacity-90">
          Oszczędź czas i nerwy. Dajemy Ci dostęp do bazy zweryfikowanych ekspertów, którzy naprawią usterkę, kiedy
          Tobie pasuje.
        </TextComponent>
      </div>

      <div className="relative z-10 mb-10 flex justify-center">
        <div className="flex w-full max-w-md rounded-xl border border-white/10 bg-[var(--primary-800)]/30 p-1 backdrop-blur-sm">
          <TabButton
            isActive={activeSection === "features"}
            onClick={() => setActiveSection("features")}
            icon="pi-star"
            label="Co zyskujesz?"
          />
          <TabButton
            isActive={activeSection === "howItWorks"}
            onClick={() => setActiveSection("howItWorks")}
            icon="pi-info-circle"
            label="Jak to działa?"
          />
        </div>
      </div>

      <div className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          {activeSection === "features" ? (
            <motion.div
              key="features"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5"
            >
              {FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="howItWorks"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8 text-center">
                <TextComponent element="h2" color="white" weight="extrabold">
                  Jak to działa?
                </TextComponent>
                <TextComponent element="h5" color="white" className="opacity-80">
                  Prosty proces w trzech krokach
                </TextComponent>
              </div>
              <div className="mb-12 flex flex-col gap-12">
                {STEPS.map((step, index) => (
                  <StepCard
                    key={step.title}
                    maxStepNumber={3}
                    stepNumber={index + 1}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 mt-8 w-full border-t border-white/10 pt-6">
        <TestimonialSlider opinions={OPINIONS} />
      </div>
    </div>
  );
};
