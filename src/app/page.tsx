"use client";
import Image from "next/image";
import { useState } from "react";
import Afrique from "../../public/images/afrique.png";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Play, Eye, Users, Rocket, Lightbulb, Globe, GraduationCap, Link2, Star, Mic, Mail, MapPin } from "lucide-react";
import Testimonials from "../../public/images/testimonials.png";
import contentImg from "../../public/images/conference.png";
import workshopImg from "../../public/images/agenda-image.png";
import timelineImg from "../../public/images/timeline.png";
import timelineImg2 from "../../public/images/timeline2.png";
import rightArrow from "../../public/images/right-arrow.svg";
import leftArrow from "../../public/images/left-arrow.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useForm, FormProvider } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Checkbox } from "./components/ui/checkbox";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";

export default function Home() {
  const [currentSpeakerPage, setCurrentSpeakerPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const partners = [
    { name: "Deliveroo", image: "/images/deliveroo.svg" },
    { name: "Tech", image: "/images/tech.svg" },
    { name: "Logite", image: "/images/logite.svg" },
    { name: "Salesforce", image: "/images/salesforce.svg" },
    { name: "Delivery", image: "/images/delivery.svg" },
  ];

  const paymentMethods = [
    { name: "Stripe", image: "/images/stripe.svg" },
    { name: "Mastercard", image: "/images/mastercard.svg" },
    { name: "BitPay", image: "/images/bitpay.svg" },
  ];

  const sponsorshipPackages = [
    { name: "Diamond Sponsor", price: "5,000$+" },
    { name: "Gold Sponsor", price: "3,000$" },
    { name: "Silver Sponsor", price: "2,000$" },
    { name: "Partner Sponsor", price: "1,000$" },
  ];

  const ticketTypes = [
    { name: "Standard Ticket", price: "12$" },
    { name: "VIP Ticket", price: "60$" },
    { name: "Hackathon Access", price: "30$" },
  ];

  const timelineData = [
    {
      title: "Pré-événement (1 Month Before)",
      subEvents: [
        {
          day: "Online Workshops",
          description: "Web3 training for developers",
        },
        {
          day: "Mentorship Sessions",
          description: "Coaching for blockchain startups and entrepreneurs",
        },
        {
          day: "Meetups",
          description:
            "Meetups in various countries before the conference: Togo, Benin, Senegal, Ivory Coast, Cameroon and Gabon",
        },

        {
          day: "Campus Tour",
        },

        {
          day: "Marketing",
          description:
            "Marketing and partnerships with contributors from different countries for strong engagement",
        },
      ],
    },
    {
      title: "Hackathon & Workshops - 3 Days",
      subEvents: [
        {
          day: "Day 1",
          description: "Hackathon Kickoff: Introduction of themes and partners",
        },
        {
          day: "Day 2",
          description:
            "Development & Mentorship: Teams receive guidance from experts",
        },

        {
          day: "Day 3",
          description: "Project Pitches: Presentation of developed solutions",
        },
      ],
    },
    {
      title: "Conférence principale",
      subEvents: [
        {
          day: "Day 4",
          description:
            "Opening conferences, Keynotes from Web3 leaders, Panels on decentralized governance, Technical workshops, Startup pitch sessions, Networking sessions, Speaker interventions, Roundtables on financial inclusion, Announcement of hackathon winners and prize distribution, Closing and Web3 ecosystem roadmap for Africa",
        },
      ],
    },
  ];

  const speakers = [
    {
      name: "Solene Daviaud ",
      role: "Founder Dev3Pack",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/solene_onlydust.png",
    },
    {
      name: "Awosika Israel Ayodeji",
      role: "Founder Web3Bridge",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/ayodeji_web3bridge.png",
    },
    {
      name: "Santiago Zuluaga ",
      role: "Global Developer Advocate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/santiago_lisk.png",
    },
    {
      name: "Sarah Wilson",
      role: "Web3 Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png",
    },
    {
      name: "Michael Brown",
      role: "NFT Specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    },
    {
      name: "Emily Davis",
      role: "Ethereum Researcher",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    },
    {
      name: "David Miller",
      role: "Protocol Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    },
    {
      name: "Lisa Anderson",
      role: "Security Expert",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    },
  ];

  const speakersPerPage = 4;
  const totalPages = Math.ceil(speakers.length / speakersPerPage);

  const handlePrevSpeakers = () => {
    setCurrentSpeakerPage((prev: number) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextSpeakers = () => {
    setCurrentSpeakerPage((prev: number) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleSpeakers = speakers.slice(
    currentSpeakerPage * speakersPerPage,
    (currentSpeakerPage + 1) * speakersPerPage
  );

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      description: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "95b40327-14b0-4c6b-a509-b65d2dc8faa4", // Remplacez par votre clé d'accès Web3Forms
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          subject: formData.get('subject'),
          company: formData.get('company'),
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--eth-dark)] to-[var(--eth-primary)] text-[var(--eth-light)]">
      {/* Hero Section */}
      <section className="relative pt-36 pb-32 px-4 overflow-hidden max-w-[90%] m-auto min-h-screen flex flex-col justify-center">
        {/* Background avec l'image de l'Afrique */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--eth-dark)] via-[var(--eth-dark)]/80 to-[var(--eth-primary)]/90 z-10" />
          
          {/* Image de fond */}
          <Image
            src={Afrique}
            alt="Carte de l'Afrique"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />

          {/* Motif hexagonal */}
          <div className="absolute inset-0 z-20 opacity-10">
            <div className="absolute w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm5.657 0L19.514 8.485 20.93 9.9l8.485-8.485h-1.415zM32.372 0L22.343 10.03 23.758 11.444l10.03-10.03h-1.415zm-1.414 0L19.514 11.444l1.414 1.414L34.2 0h-3.242zm-5.656 0L11.444 13.858l1.414 1.414L29.03 0h-3.242zm-5.657 0L5.373 17.272l1.414 1.414L22.372 0h-2.83zM35.2 0L19.514 15.686l1.414 1.414L36.614 0H35.2zm5.657 0L22.343 18.514l1.414 1.414L42.272 0h-1.415zM40.857 0L22.343 18.514l1.414 1.414L42.272 0h-1.415zm5.657 0L25.172 21.343l1.414 1.414L48.514 0h-2.z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>

        <div className="relative z-30 text-center">
          {/* Date badge */}
          <div className="inline-block mb-8 px-8 py-3 rounded-full bg-[var(--eth-secondary)] shadow-[0_0_20px_rgba(0,255,208,0.3)]">
            <span className="text-[var(--eth-dark)] font-bold text-lg">24-27 Juillet 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 eth-gradient-text" style={{
            textShadow: '0 0 30px rgba(0,0,0,0.5)'
          }}>
            Conférence Ethereum <br />
            <span className="text-[var(--eth-light)]">Afrique Francophone</span>
          </h1>

          <p className="text-[var(--eth-light)] mb-12 max-w-2xl mx-auto text-xl opacity-90 drop-shadow-lg">
            "Connecter les écosystèmes Web3 mondiaux pour un impact global"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              className="eth-button"
              onClick={() => {
                const element = document.getElementById("register");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              S'inscrire maintenant
            </Button>
            <Button
              variant="outline"
              className="eth-button-outline"
              onClick={() => {
                const element = document.getElementById("sponsors");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Devenir Sponsor
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="eth-card p-6 backdrop-blur-md bg-[var(--eth-dark)]/30">
              <Users className="w-10 h-10 text-[var(--eth-secondary)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-[var(--eth-light)] opacity-80">Participants</p>
            </div>
            <div className="eth-card p-6 backdrop-blur-md bg-[var(--eth-dark)]/30">
              <Mic className="w-10 h-10 text-[var(--eth-secondary)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-[var(--eth-light)] opacity-80">Speakers</p>
            </div>
            <div className="eth-card p-6 backdrop-blur-md bg-[var(--eth-dark)]/30">
              <Globe className="w-10 h-10 text-[var(--eth-secondary)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-[var(--eth-light)] opacity-80">Pays</p>
            </div>
          </div>
        </div>
      </section>

      {/* video section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] m-auto">
        {/* Video Player */}
        <div className="relative">
          <div className="aspect-video relative rounded-3xl overflow-hidden group m-5 shadow-2xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/ethafrique_intro.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          </div>
          
        </div>
        {/* write up section */}
        <div className="flex flex-col md:flex-row items-center justify-between m-5 md:m-10">
          <div className="text-start w-full md:w-[50%] p-2 md:p-5">
            <p className="text-justify my-5 leading-8 ">
              Un événement mondial réunissant experts, innovateurs, startups, investisseurs et passionnés pour renforcer l'adoption de la blockchain et du Web3, tout en mettant en lumière le potentiel de l'écosystème francophone sur la scène internationale.
            </p>
            <p className="text-justify my-5 leading-8">
              La conférence unit les communautés ETH du Togo, Bénin, Côte d'Ivoire, Sénégal, Cameroun et Burkina Faso pour valoriser l'écosystème francophone — tout en reconnaissant l'inspiration essentielle des pays anglophones.
            </p>
            <Button
              className={cn(
                "bg-[#2bf7d5] w-full md:w-1/2 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300",
                "text-[#06286f] px-8 py-6 text-lg rounded-lg cursor-pointer"
              )}
            >
              À propos
            </Button>
          </div>
          <div className="w-full md:w-[30%] my-5  ">
            <Image src={Testimonials} alt="Témoignages" />
          </div>
        </div>
      </section>

      {/* partners section */}
      <section
        className="relative p-5 overflow-hidden max-w-[90%] m-auto"
        id="partenaires"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Sponsors & Partenaires Officiels
        </h2>
        <p className="text-center text-[#2bf7d5] font-semibold mb-2 animate-fade-in" style={{animation: 'fadeIn 2s'}}>Un réseau panafricain et international pour soutenir l'innovation Web3</p>
        <div className="py-10 w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-16 opacity-80">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={cn(
                "w-24 md:w-32 transition-all duration-300 bg-white/10 rounded-xl p-2 flex items-center justify-center shadow-md",
                "hover:scale-110 hover:shadow-xl hover:bg-white/30 cursor-pointer"
              )}
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={160}
                height={50}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center my-5">
          <Button
            className={cn(
              "bg-[#2bf7d5] font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300",
              "text-[#06286f] px-8 py-6 text-lg rounded-lg cursor-pointer"
            )}
          >
            S'inscrire
          </Button>
          <Button
            variant="outline"
            className={cn(
              "border-[#2bf7d5] text-[#2bf7d5] font-bold hover:text-[#06286F] px-8 py-6 text-lg rounded-lg cursor-pointer",
              "bg-transparent hover:bg-[#2bf7d5] hover:text-[#06286f] hover:scale-105 hover:shadow-xl transition-all duration-300"
            )}
          >
            Devenir Sponsor
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={contentImg}
                alt="ETH Afrique Conference"
                className="rounded-2xl eth-card p-2"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--eth-primary)] p-4 rounded-xl eth-card">
                <h3 className="text-2xl font-bold mb-2">3+ Jours</h3>
                <p className="text-[var(--eth-light)] opacity-80">d'événements</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 eth-gradient-text">
                Découvrez l'Avenir de la Blockchain en Afrique
              </h2>
              <p className="text-[var(--eth-light)] opacity-90 mb-8 text-lg">
                ETH Afrique est plus qu'une conférence - c'est un catalyseur pour 
                l'innovation blockchain en Afrique francophone. Rejoignez-nous pour 
                des discussions approfondies, des ateliers pratiques et des opportunités 
                de networking uniques.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="eth-card p-4">
                  <Rocket className="w-8 h-8 text-[var(--eth-secondary)] mb-4" />
                  <h4 className="font-bold mb-2">Innovation</h4>
                  <p className="text-[var(--eth-light)] opacity-80">
                    Découvrez les dernières avancées blockchain
                  </p>
                </div>
                <div className="eth-card p-4">
                  <Lightbulb className="w-8 h-8 text-[var(--eth-secondary)] mb-4" />
                  <h4 className="font-bold mb-2">Formation</h4>
                  <p className="text-[var(--eth-light)] opacity-80">
                    Workshops et sessions pratiques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 eth-gradient-text">
              Programme de l'Événement
            </h2>
            <p className="text-[var(--eth-light)] opacity-90 max-w-2xl mx-auto">
              Un programme riche en contenu, conçu pour maximiser votre apprentissage 
              et vos opportunités de networking.
            </p>
          </div>

          <div className="relative">
            {timelineData.map((phase, index) => (
              <div key={index} className="mb-12 relative">
                <div className="eth-card p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[var(--eth-secondary)]">
                    {phase.title}
                  </h3>
                  <div className="space-y-4">
                    {phase.subEvents.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start gap-4">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[var(--eth-secondary)]" />
                        <div>
                          <h4 className="font-bold">{event.day}</h4>
                          {event.description && (
                            <p className="text-[var(--eth-light)] opacity-80">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {index < timelineData.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[var(--eth-secondary)] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 eth-gradient-text">
              Nos Intervenants
            </h2>
            <p className="text-[var(--eth-light)] opacity-90 max-w-2xl mx-auto">
              Rencontrez nos experts et leaders de l'écosystème Ethereum qui partageront 
              leurs connaissances et expériences.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleSpeakers.map((speaker, index) => (
                <div key={index} className="eth-card p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-[var(--eth-secondary)] mb-2">{speaker.role}</p>
                  <p className="text-[var(--eth-light)] opacity-80 text-sm">
                    {speaker.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrevSpeakers}
                className="p-2 rounded-full bg-[var(--eth-primary)] hover:bg-[var(--eth-secondary)] transition-colors duration-300"
              >
                <Image src={leftArrow} alt="Previous" width={24} height={24} />
              </button>
              <button
                onClick={handleNextSpeakers}
                className="p-2 rounded-full bg-[var(--eth-primary)] hover:bg-[var(--eth-secondary)] transition-colors duration-300"
              >
                <Image src={rightArrow} alt="Next" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 eth-gradient-text">
              Nos Sponsors
            </h2>
            <p className="text-[var(--eth-light)] opacity-90 max-w-2xl mx-auto">
              Rejoignez les leaders de l'industrie qui soutiennent l'innovation blockchain en Afrique
            </p>
          </div>

          {/* Packages de Sponsoring */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {sponsorshipPackages.map((pkg, index) => (
              <div
                key={index}
                className="eth-card p-8 backdrop-blur-md bg-[var(--eth-dark)]/40 hover:bg-[var(--eth-dark)]/60 transition-all duration-300 border border-[var(--eth-secondary)]/20 hover:border-[var(--eth-secondary)]/40"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-[var(--eth-secondary)]">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold mb-6 eth-gradient-text">
                    {pkg.price}
                  </div>
                  <Button className="eth-button w-full">
                    Devenir Sponsor
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Logos des Sponsors */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-6 eth-card backdrop-blur-md bg-[var(--eth-dark)]/30 hover:bg-[var(--eth-dark)]/50 transition-all duration-300 group"
              >
                <div className="relative h-16 flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={160}
                    height={64}
                    className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-[var(--eth-secondary)]">
              Moyens de Paiement Acceptés
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="p-4 eth-card backdrop-blur-md bg-[var(--eth-dark)]/30 hover:bg-[var(--eth-dark)]/50 transition-all duration-300"
              >
                <div className="relative h-8 w-32">
                  <Image
                    src={method.image}
                    alt={method.name}
                    fill
                    className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tickets section */}
      <section
        className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto my-20"
        id="inscriptions"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">
          Inscriptions et Billetterie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ticketTypes.map((ticket, index) => (
            <Card
              key={index}
              className="bg-white rounded-3xl transform transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-[#2563EB] text-2xl font-semibold">
                  {ticket.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[#2563EB] text-5xl font-bold">
                  {ticket.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <Button
            className={cn(
              "bg-[#2bf7d5]",
              "text-[#06286f] px-12 py-4 text-lg rounded-lg w-full md:w-auto max-w-md cursor-pointer",
              "hover:opacity-90 transition-opacity"
            )}
          >
            Réserver mon billet
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 section-gradient" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 eth-gradient-text">
              Contactez-nous
            </h2>
            <p className="text-[var(--eth-light)] opacity-90 max-w-2xl mx-auto">
              Une question ? N'hésitez pas à nous contacter
            </p>
          </div>

          <div className="eth-card p-8 backdrop-blur-md bg-[var(--eth-dark)]/40 border border-[var(--eth-secondary)]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="eth-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@exemple.com"
                    className="eth-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Votre entreprise"
                    className="eth-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Sujet de votre message"
                    className="eth-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre message"
                  className="eth-input min-h-[120px]"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button 
                  type="submit" 
                  className="eth-button w-full md:w-auto px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-400">
                    Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400">
                    Une erreur est survenue. Veuillez réessayer plus tard.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 eth-gradient-text">
              Questions Fréquentes
            </h2>
            <p className="text-[var(--eth-light)] opacity-90">
              Trouvez les réponses à vos questions sur ETH Afrique.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="eth-card">
                <AccordionTrigger className="text-[var(--eth-light)] hover:text-[var(--eth-secondary)]">
                  Qu'est-ce que ETH Afrique ?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--eth-light)] opacity-90">
                  ETH Afrique est la première conférence Ethereum dédiée à l'Afrique francophone. 
                  Elle rassemble développeurs, entrepreneurs et passionnés de blockchain pour 
                  partager connaissances et expériences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="eth-card">
                <AccordionTrigger className="text-[var(--eth-light)] hover:text-[var(--eth-secondary)]">
                  Quand et où aura lieu l'événement ?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--eth-light)] opacity-90">
                  L'événement se tiendra du 24 au 27 juillet 2024 à Lomé, Togo. Le lieu exact 
                  sera communiqué aux participants inscrits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="eth-card">
                <AccordionTrigger className="text-[var(--eth-light)] hover:text-[var(--eth-secondary)]">
                  Comment puis-je participer ?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--eth-light)] opacity-90">
                  Vous pouvez vous inscrire directement sur notre site web. Différents types 
                  de billets sont disponibles selon vos besoins et votre profil.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="eth-card">
                <AccordionTrigger className="text-[var(--eth-light)] hover:text-[var(--eth-secondary)]">
                  Y aura-t-il des opportunités de networking ?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--eth-light)] opacity-90">
                  Oui, l'événement comprend de nombreuses sessions de networking, des pauses 
                  café et des événements sociaux pour faciliter les échanges entre participants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="eth-card">
                <AccordionTrigger className="text-[var(--eth-light)] hover:text-[var(--eth-secondary)]">
                  Comment devenir sponsor ?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--eth-light)] opacity-90">
                  Nous proposons différents packages de sponsoring. Contactez-nous via le 
                  formulaire de contact pour plus d'informations sur les opportunités de 
                  partenariat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
