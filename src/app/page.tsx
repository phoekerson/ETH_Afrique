"use client";
import Image from "next/image";
import Afrique from "../../public/images/afrique.png";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Play, Eye, Users, Rocket, Lightbulb, Globe, GraduationCap, Link2, Star, Mic } from "lucide-react";
import Testimonials from "../../public/images/testimonials.png";
import contentImg from "../../public/images/conference.png";
import workshopImg from "../../public/images/agenda-image.png";
import timelineImg from "../../public/images/timeline.png";
import timelineImg2 from "../../public/images/timeline2.png";
import { useState } from "react";
import rightArrow from "../../public/images/right-arrow.svg";
import leftArrow from "../../public/images/left-arrow.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useForm } from "react-hook-form";
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

export default function Home() {
  const [currentSpeakerPage, setCurrentSpeakerPage] = useState(0);

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
      name: "John Doe",
      role: "Blockchain Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png",
    },
    {
      name: "Jane Smith",
      role: "DeFi Specialist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png",
    },
    {
      name: "Alex Johnson",
      role: "Smart Contract Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/speaker-image.png",
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
    setCurrentSpeakerPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextSpeakers = () => {
    setCurrentSpeakerPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleSpeakers = speakers.slice(
    currentSpeakerPage * speakersPerPage,
    (currentSpeakerPage + 1) * speakersPerPage
  );

  const form = useForm({
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

  return (
    <div className="bg-[#06286F] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-32 px-4 overflow-hidden max-w-[90%] m-auto min-h-screen flex flex-col justify-center">
        {/* Motif africain stylisé en fond */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src={Afrique}
            alt="Carte de l'Afrique"
            fill
            className="object-cover opacity-30 blur-sm"
            priority
          />
          {/* Ajout d'une vague SVG pour séparer la section */}
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2bf7d5" fillOpacity="0.15" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down" style={{animation: 'fadeInDown 1.2s cubic-bezier(0.23, 1, 0.32, 1)'}}>
            Conférence Ethereum <br />
            Afrique Francophone
          </h1>
          <p className="text-[#D1FFEC] mb-8 max-w-2xl mx-auto text-lg animate-fade-in" style={{animation: 'fadeIn 2s'}}>"Connecter les écosystèmes Web3 mondiaux pour un impact global"</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animation: 'fadeInUp 1.5s'}}>
            <Button
              className={cn(
                "bg-[#2bf7d5] flex items-center gap-2 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300",
                "text-[#06286f] px-8 py-6 text-lg rounded-lg cursor-pointer font-bold"
              )}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="#06286f" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
              S'inscrire
            </Button>
            <Button
              variant="outline"
              className={cn(
                "border-[#2bf7d5] text-[#2bf7d5] flex items-center gap-2 hover:text-[#06286F] px-8 py-6 text-lg rounded-lg cursor-pointer font-bold",
                "bg-transparent hover:bg-[#2bf7d5] hover:text-[#06286f] hover:scale-105 hover:shadow-xl transition-all duration-300"
              )}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="#2bf7d5" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              Devenir Sponsor
            </Button>
          </div>
        </div>
        {/* Animations CSS */}
        <style jsx>{`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
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

      {/* À propos section */}
      <section
        className="relative p-1 md:p5 overflow-hidden max-w-[90%] m-auto"
        id="apropos"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-start">
          À propos
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between m-5 md:m-10 gap-8">
          {/* Colonne 1 */}
          <div className="text-start w-full md:w-[45%] p-2 md:p-5 bg-[#0f2757] rounded-2xl shadow-xl border border-[#2bf7d5]/10">
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Users className="w-4 h-4 text-[#2bf7d5] mt-1" />
              ETH Afrique Francophone est bien plus qu'une conférence. Elle vise à combler un fossé en offrant un espace d'échange et de collaboration entre les acteurs de l'écosystème Ethereum dans la région francophone.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Globe className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Contrairement aux événements anglophones bien établis, cette conférence promeut l'inclusion et l'adoption de la blockchain Ethereum dans les pays où la barrière de la langue freine l'innovation.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <GraduationCap className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Sensibiliser et former développeurs, entrepreneurs et décideurs aux opportunités offertes par Ethereum et le Web3.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Rocket className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Valoriser l'écosystème francophone en mettant en avant ses forces et son potentiel d'innovation.
            </p>

            <div className="rounded-xl bg-[#06286F] px-5 py-10 mt-8 border-l-4 border-[#2bf7d5] shadow-lg">
              <h2 className="text-2xl md:4xl font-bold mb-2 text-[#2bf7d5]">Pourquoi EthAfrique ?</h2>
              <p className="my-5 leading-10 text-justify">
                L'écosystème francophone regorge de talents et de potentiel, mais fait souvent face à des barrières d'innovation dues à la langue. En offrant une plateforme de dialogue et de collaboration, nous pouvons combler ce fossé et stimuler la croissance régionale.
              </p>
            </div>
          </div>

          {/* Séparateur graphique */}
          <div className="hidden md:block w-2 h-96 bg-gradient-to-b from-[#2bf7d5]/60 to-transparent rounded-full mx-4" />

          {/* Colonne 2 */}
          <div className="text-start w-full md:w-[45%] p-2 md:p-5 bg-[#0f2757] rounded-2xl shadow-xl border border-[#2bf7d5]/10">
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Users className="w-4 h-4 text-[#2bf7d5] mt-1" />
              ETH Afrique Conf suscite déjà un fort engouement dans la communauté blockchain. Plusieurs facteurs expliquent cet enthousiasme.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Star className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Une première en Afrique francophone : un événement unique qui répond à un besoin crucial de structuration de la communauté Ethereum francophone.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Mic className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Des intervenants de renom : la conférence attire des experts, développeurs et entrepreneurs reconnus dans l'écosystème Ethereum.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Un fort potentiel d'impact : l'événement agit comme catalyseur pour des projets concrets adaptés aux réalités du continent.
            </p>
            <p className="text-justify my-5 leading-8 flex items-start gap-2">
              <Link2 className="w-4 h-4 text-[#2bf7d5] mt-1" />
              Une demande croissante pour la blockchain en Afrique : de plus en plus d'acteurs institutionnels et privés reconnaissent son potentiel transformateur.
            </p>

            <div className="rounded-xl bg-[#06286F] px-5 py-10 mt-8 border-l-4 border-[#2bf7d5] shadow-lg">
              <h2 className="text-2xl md:4xl font-bold mb-2 text-[#2bf7d5]">Un événement incontournable</h2>
              <p className="my-5 leading-10 text-justify">
                ETH Afrique Conf est une initiative clé pour l'avenir de la blockchain en Afrique francophone. Elle répond à une demande pressante d'information, de formation et de collaboration pour une adoption massive et inclusive d'Ethereum.
              </p>
            </div>
          </div>
        </div>

        {/* Image créative sous À propos */}
        <div className="relative w-full h-64 md:h-80 my-8 rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src={contentImg}
            alt="Présentation conférence"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Motif SVG décoratif par-dessus */}
          <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="220" r="40" fill="#2bf7d5" fillOpacity="0.18" />
            <circle cx="400" cy="300" r="60" fill="#2bf7d5" fillOpacity="0.12" />
            <rect x="1200" y="200" width="120" height="40" rx="20" fill="#2bf7d5" fillOpacity="0.10" />
            <path fill="#2bf7d5" fillOpacity="0.13" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06286F]/60 to-transparent pointer-events-none rounded-3xl" />
        </div>
      </section>

        {/* timeline section */}
      <section
        className="relative p-1 md:p5 overflow-hidden max-w-[90%] m-auto my-10"
        id="programme"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center">
          Programme (Agenda/Schedule)
        </h2>

        {/* timeline map */}
        <div className="space-y-16">
          {timelineData.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
              {/* Timeline Content */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  {index < timelineData.length - 1 && (
                    <div className="absolute left-[15px] top-[42px] h-[calc(100%+64px)] w-[2px] bg-[#2bf7d5]"></div>
                  )}
                  
                  <div className="relative">
                    {/* Timeline Marker */}
                    <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-[#2bf7d5]"></div>

                    {/* Event Title */}
                    <h3 className="ml-16 text-2xl font-bold mb-4">
                      {event.title}
                    </h3>

                    {/* Event Content */}
                    {event.subEvents && (
                      <div className="ml-16 space-y-4 mt-4">
                        {event.subEvents.map((subEvent, subIndex) => (
                          <div
                            key={subIndex}
                            className="bg-[#0A2F85] rounded-2xl p-6 border border-[#2bf7d5]/20"
                          >
                            <h4 className="text-xl font-bold mb-2">
                              {subEvent.day}
                            </h4>
                            <p className="text-gray-300">
                              {subEvent.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Timeline Image */}
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden md:mt-12">
                {index === 0 && (
                  <Image
                    src={workshopImg}
                    alt="Pre Event Workshop Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                )}
                {index === 1 && (
                  <Image
                    src={timelineImg2}
                    alt="Hackathon Timeline Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                )}
                {index === 2 && (
                  <Image
                    src={timelineImg}
                    alt="Conference Timeline Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* speakers section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">Speakers</h2>
          <div className="flex gap-4">
            <button
              onClick={handlePrevSpeakers}
              className="w-12 h-12 flex items-center justify-center group transition-colors cursor-pointer rounded-full bg-transparent hover:bg-white/30 hover:backdrop-blur-md border border-transparent hover:border-[#2bf7d5] shadow hover:shadow-[0_0_16px_2px_#2bf7d5] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2bf7d5]"
            >
              <Image src={leftArrow} alt="left arrow" />
            </button>
            <button
              onClick={handleNextSpeakers}
              className="w-12 h-12 flex items-center justify-center group transition-colors cursor-pointer rounded-full bg-transparent hover:bg-white/30 hover:backdrop-blur-md border border-transparent hover:border-[#2bf7d5] shadow hover:shadow-[0_0_16px_2px_#2bf7d5] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2bf7d5]"
            >
              <Image src={rightArrow} alt="right arrow" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleSpeakers.map((speaker, index) => (
            <div
              key={index + currentSpeakerPage * speakersPerPage}
              className="bg-gray-100 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(43,247,213,0.15)] shadow-md"
            >
              <div className="aspect-square relative">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-[#06286F] rounded-b-2xl">
                <h3 className="text-xl font-bold mb-1 text-white">{speaker.name}</h3>
                <p className="text-[#2bf7d5] mb-2">{speaker.role}</p>
                <p className="text-gray-300 text-sm">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSpeakerPage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                currentSpeakerPage === index
                  ? "bg-[#2bf7d5] w-8"
                  : "bg-[#2bf7d5]/30 hover:bg-[#2bf7d5]/50"
              )}
            />
          ))}
        </div>
      </section>

      {/* sponsorship section */}
      <section className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto my-20">
        {/* Pourquoi Sponsoriser */}
        <div className="rounded-3xl bg-gradient-to-br from-[#06286F]/80 to-[#2bf7d5]/10 p-10 mb-12 shadow-xl flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow">Pourquoi Sponsoriser ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 w-full max-w-5xl">
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow hover:shadow-lg transition">
              <Eye className="w-10 h-10 mb-2 text-[#2bf7d5]" />
              <span className="font-bold text-white">Visibilité</span>
              <span className="text-gray-200 text-center text-sm mt-2">Exposez votre marque auprès des leaders du Web3 africain.</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 mb-2 text-[#2bf7d5]" />
              <span className="font-bold text-white">Réseau</span>
              <span className="text-gray-200 text-center text-sm mt-2">Connectez-vous avec des startups, investisseurs et experts internationaux.</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow hover:shadow-lg transition">
              <Rocket className="w-10 h-10 mb-2 text-[#2bf7d5]" />
              <span className="font-bold text-white">Impact</span>
              <span className="text-gray-200 text-center text-sm mt-2">Soutenez l'innovation et l'inclusion numérique en Afrique francophone.</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow hover:shadow-lg transition">
              <Lightbulb className="w-10 h-10 mb-2 text-[#2bf7d5]" />
              <span className="font-bold text-white">Innovation</span>
              <span className="text-gray-200 text-center text-sm mt-2">Participez à la construction de l'écosystème blockchain de demain.</span>
            </div>
          </div>
          <p className="text-gray-100 text-center max-w-3xl mb-4 text-lg">Positionnez votre structure au cœur de l'innovation blockchain africaine et bénéficiez d'une visibilité unique auprès des talents, décideurs et développeurs du Web3.</p>
        </div>

        {/* Packages de sponsoring */}
        <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow">Packages de sponsoring</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sponsorshipPackages.map((pkg, index) => (
            <Card
              key={index}
              className={cn(
                "rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(43,247,213,0.15)] shadow-lg border-2",
                pkg.name.includes("Diamond") ? "border-[#2bf7d5] ring-2 ring-[#2bf7d5]" : "border-transparent"
              )}
            >
              <CardHeader>
                <CardTitle className={cn(
                  "text-xl font-semibold text-center",
                  pkg.name.includes("Diamond") ? "text-[#2bf7d5]" : "text-[#2563EB]"
                )}>
                  {pkg.name}
                  {pkg.name.includes("Diamond") && (
                    <span className="ml-2 inline-block bg-[#2bf7d5] text-[#06286F] text-xs font-bold px-2 py-1 rounded">Premium</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={cn(
                  "text-3xl font-bold text-center",
                  pkg.name.includes("Diamond") ? "text-[#2bf7d5]" : "text-[#2563EB]"
                )}>
                  {pkg.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="py-10 w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-16 opacity-80">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-24 md:w-32 transition-all duration-300 bg-white/10 rounded-xl p-2 flex items-center justify-center shadow-md hover:scale-110 hover:shadow-xl hover:bg-white/30 cursor-pointer"
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

        <div className="flex justify-center mt-8">
          <Button
            className={cn(
              "bg-[#2bf7d5] font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300",
              "text-[#06286f] px-8 py-4 text-lg rounded-lg cursor-pointer"
            )}
          >
            Devenir Sponsor
          </Button>
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

        {/* Payment Methods */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 w-32 h-16 flex items-center justify-center"
            >
              <Image
                src={method.image}
                alt={method.name}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact and FAQ section */}
      <section
        className="relative p-1 md:p5 overflow-hidden max-w-[90%] mx-auto mt-20 pb-20"
        id="contact"
      >
        <div className="max-w-8xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow">Contactez l'équipe ETHAfrique</h2>
          <p className="text-gray-300 mb-4">
            Une question, une suggestion ou envie de rejoindre l'aventure ? Remplissez le formulaire ci-dessous, notre équipe vous répondra rapidement.
          </p>
          <div className="flex justify-center mb-8">
            <a href="https://www.linkedin.com/company/ethafrique?trk=public_post-text" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#2bf7d5] text-[#06286F] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#1ed2b6] transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v4.73z"/></svg>
              Rejoignez-nous sur LinkedIn
            </a>
          </div>
        </div>
        <div className="max-w-8xl mx-auto mb-20 bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-white">Formulaire de contact</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Prénom</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre prénom"
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nom</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre nom"
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Votre email"
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Téléphone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Votre numéro de téléphone"
                          className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Sujet</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] text-white">
                          <SelectValue placeholder="Choisissez un sujet..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0A2F85] border border-[#2bf7d5]/20 text-white rounded-lg p-2 shadow-lg">
                        <SelectItem
                          value="general"
                          className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer"
                        >
                          Question générale
                        </SelectItem>
                        <SelectItem
                          value="sponsorship"
                          className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer"
                        >
                          Sponsoring
                        </SelectItem>
                        <SelectItem
                          value="tickets"
                          className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer"
                        >
                          Billetterie
                        </SelectItem>
                        <SelectItem
                          value="speaker"
                          className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer"
                        >
                          Intervenant
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="hover:bg-[#06286F] focus:bg-[#06286F] py-2 cursor-pointer"
                        >
                          Autre
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Votre message..."
                        className="px-6 py-4 rounded-lg bg-[#0A2F85] border border-[#2bf7d5]/20 focus:outline-none focus:border-[#2bf7d5] resize-none text-white"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5 w-5 text-[#2bf7d5] border-[#2bf7d5]/20"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                        J'accepte les {" "}
                        <a href="#" className="text-[#2bf7d5] hover:underline">
                          conditions générales
                        </a>
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className={cn(
                    "bg-[#2bf7d5] font-bold",
                    "text-[#06286f] px-16 py-4 text-lg rounded-lg w-full md:w-auto min-w-[200px] cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                  )}
                >
                  Soumettre
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* FAQ Section */}
        <div className="max-w-8xl mx-auto" id="faqs">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">
            Questions Fréquentes
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-[#0A2F85] rounded-lg border-none px-6"
            >
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Qu'est-ce que la Conférence Ethereum Afrique Francophone ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                La Conférence Ethereum Afrique Francophone est un événement
                majeur qui rassemble les acteurs de l'écosystème blockchain en
                Afrique francophone. Elle vise à promouvoir l'adoption et le
                développement de la technologie Ethereum dans la région.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-[#0A2F85] rounded-lg border-none px-6"
            >
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Comment puis-je participer à l'événement ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Vous pouvez participer en achetant un billet via notre section
                billetterie. Nous proposons différentes options de tickets
                adaptées à vos besoins : Standard, VIP, et accès Hackathon.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-[#0A2F85] rounded-lg border-none px-6"
            >
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Quelles sont les opportunités de sponsoring ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Nous proposons plusieurs packages de sponsoring, du Partner
                Sponsor au Diamond Sponsor. Chaque niveau offre des avantages
                uniques et une visibilité adaptée. Consultez notre section
                sponsoring pour plus de détails.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-[#0A2F85] rounded-lg border-none px-6"
            >
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Y aura-t-il des opportunités de networking ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Oui, l'événement comprend de nombreuses sessions de networking,
                des ateliers interactifs et des moments d'échange informels pour
                faciliter les connexions entre participants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-[#0A2F85] rounded-lg border-none px-6"
            >
              <AccordionTrigger className="text-left [&>svg]:text-[#2bf7d5]">
                Comment puis-je devenir speaker ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Pour devenir speaker, veuillez nous contacter via le formulaire
                de contact en sélectionnant "Speaker" comme sujet. Notre équipe
                examinera votre proposition et vous recontactera.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
