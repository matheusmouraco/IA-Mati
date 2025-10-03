
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Snowflake,
  Zap,
  Camera,
  Home as HomeIcon,
  Sun,
  Paintbrush,
  Hammer,
  Layers,
  Droplets,
  Sparkles,
  Shield,
  Leaf,
  Users,
  Palette,
  Scissors,
  Check,
  ArrowRight,
  MessageCircle,
  Star,
  Clock,
  Globe,
  Smartphone,
  Search,
  Award,
  UserCheck,
  TrendingUp,
  PiggyBank,
  ThumbsUp } from
'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ExitIntentPopup from '../components/ExitIntentPopup';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        if (!sessionStorage.getItem('saiti-popup-shown')) {
          setShowPopup(true);
          sessionStorage.setItem('saiti-popup-shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20de%20IA%20da%20Mati%20Studio%20e%20quero%20criar%20my%20site.";

  const services = [
  {
    title: "Instalação & Manutenção",
    items: [
    "Ar-condicionado (split, VRF, etc.)",
    "Elétrica e hidráulica",
    "Tomadas, ventiladores, chuveiros",
    "Portões eletrônicos, câmeras",
    "Energia solar",
    "Manutenção predial"],

    icon: Zap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Construção & Reforma",
    items: [
    "Pintura residencial e comercial",
    "Piso epóxi, assentamento",
    "Drywall, gesso",
    "Telhados e reformas rápidas"],

    icon: Hammer,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Limpeza & Conservação",
    items: [
    "Pós-obra, fachada, estofado",
    "Dedetização",
    "Limpeza de caixa d’água"],

    icon: Sparkles,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Serviços Especializados",
    items: [
    "Marido de aluguel",
    "Envelopamento",
    "Jardinagem",
    "Serralheria",
    "Pequenas mudanças"],

    icon: Award,
    color: "from-purple-500 to-indigo-500"
  }];


  const benefits = [
  { icon: Star, text: "Um visual profissional que passa confiança" },
  { icon: Smartphone, text: "Página leve e rápida (funciona em qualquer celular)" },
  { icon: MessageCircle, text: "Botão do WhatsApp sempre visível" },
  { icon: Globe, text: "Domínio .com.br incluso" },
  { icon: Search, text: "Otimização para o Google (mais chances de aparecer nas buscas)" },
  { icon: Shield, text: "Suporte garantido" }];


  const targetAudience = [
  { icon: UserCheck, text: "Trabalha por conta própria" },
  { icon: TrendingUp, text: "Quer atrair mais clientes" },
  { icon: PiggyBank, text: "Não quer gastar R$ 2.000 num site tradicional" },
  { icon: ThumbsUp, text: "Quer algo direto, prático e que FUNCIONA" }];


  const steps = [
  {
    number: "01",
    title: "Você preenche um formulário",
    description: "Com seus dados e serviços",
    icon: Users
  },
  {
    number: "02",
    title: "Criamos sua página com IA",
    description: "Otimizada e profissional",
    icon: Star
  },
  {
    number: "03",
    title: "Em até 3 dias no ar",
    description: "Com leads caindo no seu WhatsApp",
    icon: Clock
  }];


  const portfolioImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4cc8da981_portfolio-1-a-50-Prancheta-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/681401e94_portfolio-1-a-50-Prancheta-2.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/07b8499ea_portfolio-1-a-50-Prancheta-3-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8d4deb84c_portfolio-1-a-50-Prancheta-4-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9c77bb2fe_portfolio-1-a-50-Prancheta-5.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/03ba00eb5_portfolio-1-a-50-Prancheta-6.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/21d487e33_portfolio-1-a-50-Prancheta-7.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7d1c21e90_portfolio-1-a-50-Prancheta-8-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c607dcb72_portfolio-1-a-50-Prancheta-9.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f5d7d05d2_portfolio-1-a-50-Prancheta-10.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b8810818c_portfolio-1-a-50-Prancheta-11.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b7af1950f_portfolio-1-a-50-Prancheta-12-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2a37f3400_portfolio-1-a-50-Prancheta-13.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/686744af6_portfolio-1-a-50-Prancheta-14.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c8ad24085_portfolio-1-a-50-Prancheta-15.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/16ef1caf2_portfolio-1-a-50-Prancheta-16.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1bb5226a0_portfolio-1-a-50-Prancheta-17.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8b6adb65c_portfolio-1-a-50-Prancheta-18-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b964be93a_portfolio-1-a-50-Prancheta-19.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/24bd78686_portfolio-1-a-50-Prancheta-20.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/610bb99a0_portfolio-1-a-50-Prancheta-23.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f052aede4_portfolio-1-a-50-Prancheta-24.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cd876ecb4_portfolio-1-a-50-Prancheta-25.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f3c114ee5_portfolio-1-a-50-Prancheta-27-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/34f9508fe_portfolio-1-a-50-Prancheta-28-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4faf519a2_portfolio-1-a-50-Prancheta-29.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/71c4fe5e5_portfolio-1-a-50-Prancheta-30.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5edfa8cf2_portfolio-1-a-50-Prancheta-31.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cc1e599a7_portfolio-1-a-50-Prancheta-32.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3e8b16824_portfolio-1-a-50-Prancheta-33.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/484538f3f_portfolio-1-a-50-Prancheta-34.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6803b7fc9_portfolio-1-a-50-Prancheta-35.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/72d32b329_portfolio-1-a-50-Prancheta-36.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/229775994_portfolio-1-a-50-Prancheta-37.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/594dfac98_portfolio-1-a-50-Prancheta-38.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dd97c72bd_portfolio-1-a-50-Prancheta-39.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/37b1d8e45_portfolio-1-a-50-Prancheta-40.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9deae3f09_portfolio-1-a-50-Prancheta-41.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/120e7bea0_portfolio-1-a-50-Prancheta-42.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3016f0c6e_portfolio-1-a-50-Prancheta-43.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4bcfcb26e_portfolio-1-a-50-Prancheta-44-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eb5ec848a_portfolio-1-a-50-Prancheta-45.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/724b418a4_portfolio-1-a-50-Prancheta-46.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8b6e60e8b_portfolio-1-a-50-Prancheta-47.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a22602ee1_portfolio-1-a-50-Prancheta-48.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c1cd4712d_portfolio-1-a-50-Prancheta-49.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4aa895d0d_portfolio-51-a-100-Prancheta-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8386e71ef_portfolio-51-a-100-Prancheta-2.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/166c7ba2c_portfolio-51-a-100-Prancheta-3-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0c77ec6b8_portfolio-51-a-100-Prancheta-4.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a2191ad62_portfolio-51-a-100-Prancheta-5.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e41a17a18_portfolio-51-a-100-Prancheta-6.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4ba74e0fa_portfolio-51-a-100-Prancheta-7.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9bd9f9f26_portfolio-51-a-100-Prancheta-8.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/20c3e8be4_portfolio-51-a-100-Prancheta-9.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/42d6c9d48_portfolio-51-a-100-Prancheta-10.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/722b52f8d_portfolio-51-a-100-Prancheta-11.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/59f159997_portfolio-51-a-100-Prancheta-12.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3f41873cf_portfolio-51-a-100-Prancheta-13.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/536019f95_portfolio-51-a-100-Prancheta-14.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0d065cdfb_portfolio-51-a-100-Prancheta-15-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/735cc9bce_portfolio-51-a-100-Prancheta-16.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/400d15043_portfolio-51-a-100-Prancheta-17.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8c588ed40_portfolio-51-a-100-Prancheta-18.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d265d637a_portfolio-51-a-100-Prancheta-19.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7f16b3d39_portfolio-51-a-100-Prancheta-20.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3f1ff1b6f_portfolio-51-a-100-Prancheta-23.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dcb58dd24_portfolio-51-a-100-Prancheta-24.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/61abee52f_portfolio-51-a-100-Prancheta-25.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/232f5a47f_portfolio-51-a-100-Prancheta-27-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1a74866ac_portfolio-51-a-100-Prancheta-28.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/896a41c48_portfolio-51-a-100-Prancheta-29.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4c5fb789f_portfolio-51-a-100-Prancheta-30.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/35bdce65c_portfolio-51-a-100-Prancheta-31.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0df59ba43_portfolio-51-a-100-Prancheta-32.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/fcc22709c_portfolio-51-a-100-Prancheta-33.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5917502ae_portfolio-51-a-100-Prancheta-34.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a17a9c5c6_portfolio-51-a-100-Prancheta-35.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ff7342936_portfolio-51-a-100-Prancheta-36.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/388ce8b3b_portfolio-51-a-100-Prancheta-37.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6b40c93c2_portfolio-51-a-100-Prancheta-38.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/104781c80_portfolio-51-a-100-Prancheta-39.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cd8e25f39_portfolio-51-a-100-Prancheta-40.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/82d6892fe_portfolio-51-a-100-Prancheta-41.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/022a494da_portfolio-51-a-100-Prancheta-42.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/401b35f00_portfolio-51-a-100-Prancheta-43-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7a43de08d_portfolio-51-a-100-Prancheta-44.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e91523970_portfolio-51-a-100-Prancheta-45.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3cde758a8_portfolio-51-a-100-Prancheta-46-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/27245589b_portfolio-51-a-100-Prancheta-48.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/96916a23b_portfolio-51-a-100-Prancheta-49.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f4ab19837_portfolio-51-a-100-Prancheta-50.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/558d4b085_portfolio-51-a-100-Prancheta-51.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/dfbd2896f_portfolio-51-a-100-Prancheta-52.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d62e59ada_portfolio-51-a-100-Prancheta-53.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f190277cb_portfolio-51-a-100-Prancheta-54.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/55604cd67_portfolio-51-a-100-Prancheta-55.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ca9e7e521_portfolio-51-a-100-Prancheta-56.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/19700acdf_portfolio-51-a-100-Prancheta-57.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cd6048290_portfolio-51-a-100-Prancheta-58.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/74e0746e8_portfolio-51-a-100-Prancheta-59.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/be7b701a6_portfolio-51-a-100-Prancheta-60-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8faadff44_portfolio-51-a-100-Prancheta-61.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/da906793f_portfolio-51-a-100-Prancheta-62.png"
  ];


  return (
    <>
      <style>{`
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem)); /* -50% for half of items, -1rem for the gap */
          }
        }
        .scroller__inner {
          animation: scroll 180s linear infinite; /* Adjusted duration for more images */
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/686234e18_2.png" alt="Mati Studio Logo" className="h-10" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group">
                        Fale Conosco
                        <MessageCircle className="ml-2 w-4 h-4" />
                    </Button>
                </a>
            </div>
        </div>
      </header>
      <div className="min-h-screen bg-white pt-[68px]"> 
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FF004D%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20"> 
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]"
              initial="initial"
              animate="animate"
              variants={staggerContainer}>

              <motion.div className="space-y-8" variants={fadeInUp}>
                <div className="space-y-6">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold text-[#2E2E2E] leading-tight"
                    variants={fadeInUp}>

                    Você vive de serviço, mas o{' '}
                    <span className="text-[#FF004D] relative"> 
                      cliente não chega?
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 bg-[#FF004D] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 0.8 }} />

                    </span>
                  </motion.h1>
                  
                  <motion.p
                    className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed"
                    variants={fadeInUp}>

                    É porque ainda não tem um{' '}
                    <span className="font-semibold text-[#2E2E2E]">site seu trabalhando por você</span>
                    {' '}— 24 horas por dia.
                  </motion.p>
                </div>

                <motion.div variants={fadeInUp}>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-[#FF004D] hover:bg-[#D90042] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">

                      Quero meu site pronto em 3 dias
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-6 pt-8"
                  variants={fadeInUp}>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#FF004D]" /> 
                    <span className="text-sm font-medium text-gray-600">Entrega em 3 dias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-[#FF004D]" /> 
                    <span className="text-sm font-medium text-gray-600">Leads direto no WhatsApp</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative hidden lg:block"
                variants={fadeInUp}>

                {/* Device Mockups */}
                <div className="relative">
                  {/* Desktop Mockup */}
                  <div className="relative ml-auto w-[450px]">
                    <div className="bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
                      <div className="flex items-center space-x-1.5 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-white rounded-lg overflow-hidden h-[250px]">
                        <div className="bg-[#FF004D] p-4 text-white text-center"> 
                          <h3 className="text-lg font-bold">João Instalações Elétricas</h3>
                          <p className="text-xs opacity-90">Profissional há 15 anos</p>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <div className="flex items-center space-x-2 mb-1">
                                <Zap className="w-4 h-4 text-[#FF004D]" /> 
                                <span className="text-xs font-semibold">Instalação Elétrica</span>
                              </div>
                              <p className="text-[10px] text-gray-600">Tomadas, disjuntores, quadros</p>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <div className="flex items-center space-x-2 mb-1">
                                <Snowflake className="w-4 h-4 text-[#FF004D]" /> 
                                <span className="text-xs font-semibold">Ar-condicionado</span>
                              </div>
                              <p className="text-[10px] text-gray-600">Split, VRF, manutenção</p>
                            </div>
                          </div>
                          <div className="bg-green-500 text-white p-2 rounded-lg text-center">
                            <MessageCircle className="w-4 h-4 mx-auto mb-1" />
                            <span className="text-xs font-bold">Orçamento via WhatsApp</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-600 h-4 w-[200px] mx-auto rounded-b-lg"></div>
                    <div className="bg-gray-500 h-2 w-[250px] mx-auto"></div>
                  </div>

                  {/* Mobile Mockup */}
                  <motion.div
                    className="absolute -bottom-16 -left-8 z-10"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>

                    <div className="bg-gray-900 p-2 rounded-3xl shadow-2xl transform -rotate-6">
                      <div className="bg-white rounded-2xl overflow-hidden w-48 h-80">
                        <div className="bg-[#FF004D] p-3 text-white text-center"> 
                          <h4 className="text-sm font-bold">Carlos Pinturas</h4>
                          <p className="text-xs opacity-90">Especialista em epóxi</p>
                        </div>
                        <div className="p-4">
                          <div className="space-y-2 mb-3">
                            <div className="flex items-center space-x-2">
                              <Paintbrush className="w-3 h-3 text-[#FF004D]" /> 
                              <span className="text-xs">Pintura residencial</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Layers className="w-3 h-3 text-[#FF004D]" /> 
                              <span className="text-xs">Piso epóxi</span>
                            </div>
                          </div>
                          <div className="bg-green-500 text-white p-2 mt-4 rounded text-center">
                            <span className="text-xs font-bold">Fale Comigo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                🛠️ É pra você que trabalha com:
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate={isVisible.services ? "animate" : "initial"}>

              {services.map((service, index) =>
              <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gray-50/50">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">
                        {service.title}
                      </h3>
                      
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) =>
                      <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                            <Check className="w-4 h-4 text-[#FF004D] mr-2 mt-0.5 flex-shrink-0" /> 
                            <span>{item}</span>
                          </li>
                      )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section id="problem" className="py-24 bg-gradient-to-r from-[#2E2E2E] to-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23FF004D%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E)] opacity-20"></div> 
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.problem ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8">

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Se você ainda depende só do{' '}
                <span className="text-[#FF004D]">boca a boca</span> ou{' '} 
                <span className="text-[#FF004D]">Instagram parado</span>,{' '} 
                está perdendo cliente todos os dias.
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FF004D]"> 
                  🚀 A solução da Mati Studio
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Landing Page criada por{' '}
                  <span className="font-semibold">Inteligência Artificial</span> — 
                  otimizada e pronta pra gerar contato direto no WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* New Benefits Section */}
        <section id="benefits" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.benefits ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>

                <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                  📈 Com um site da Mati Studio, você ganha:
                </h2>
              </motion.div>

              <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate={isVisible.benefits ? "animate" : "initial"}>

                {benefits.map((benefit, index) =>
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">

                    <div className={`w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}> 
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2E2E2E] mb-1">{benefit.text}</h3>
                    </div>
                  </motion.div>
              )}
              </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gradient-to-br from-[#FF004D] to-[#D90042] text-white"> 
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.pricing ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8">

              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                💸 Investimento
              </h2>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-6xl md:text-7xl font-bold">R$ 497</span>
                    <p className="text-xl mt-2">no primeiro mês</p>
                  </div>
                  
                  <div className="border-t border-white/30 pt-6">
                    <p className="text-lg">
                      Depois, apenas{' '}
                      <span className="text-2xl font-bold">R$ 39,90/mês</span>
                      {' '}para manter tudo funcionando
                    </p>
                    <p className="text-sm mt-2 opacity-90">
                      (domínio, hospedagem e suporte)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible['how-it-works'] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                📲 Passo a passo:
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate={isVisible['how-it-works'] ? "animate" : "initial"}>

              {steps.map((step, index) =>
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center">

                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-[#FF004D] rounded-full flex items-center justify-center mx-auto shadow-lg"> 
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2E2E2E] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section id="target" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.target ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                🎯 Feito pra quem:
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate={isVisible.target ? "animate" : "initial"}>

              {targetAudience.map((item, index) =>
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300">

                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-red-100 to-pink-200 rounded-full flex items-center justify-center"> 
                      <item.icon className="w-8 h-8 text-[#FF004D]" /> 
                  </div>
                  <span className="text-lg font-medium text-[#2E2E2E]">{item.text}</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.features ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
                🔧 Sua página inclui:
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate={isVisible.features ? "animate" : "initial"}>

              {[
              { icon: Wrench, text: "Descrição dos seus serviços" },
              { icon: Camera, text: "Galeria de fotos" },
              { icon: MessageCircle, text: "Botão de WhatsApp" },
              { icon: Search, text: "Otimização para o Google" },
              { icon: Star, text: "Visual profissional" },
              { icon: Smartphone, text: "Responsivo (mobile)" }].
              map((feature, index) =>
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">

                  <div className="w-10 h-10 bg-[#FF004D] rounded-lg flex items-center justify-center flex-shrink-0"> 
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-[#2E2E2E]">{feature.text}</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gray-900 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              className="text-center mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.portfolio ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sites que já decolamos 🚀
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Confira alguns dos projetos incríveis que nossa inteligência artificial ajudou a criar para clientes de todo o Brasil.
              </p>
            </motion.div>

            <motion.div
              className="group flex gap-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isVisible.portfolio ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-shrink-0 flex items-center justify-around min-w-full gap-8 scroller__inner group-hover:[animation-play-state:paused]">
                {portfolioImages.map((src, index) => (
                  <div key={`a-${index}`} className="flex-shrink-0 w-80">
                    <img
                      src={src}
                      alt={`Portfolio item ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-2xl transition-all duration-300"
                    />
                  </div>
                ))}
                 {/* Duplicate for seamless scroll */}
                {portfolioImages.map((src, index) => (
                  <div key={`b-${index}`} className="flex-shrink-0 w-80">
                    <img
                      src={src}
                      alt={`Portfolio item ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-2xl transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="final-cta" className="py-32 bg-gradient-to-r from-[#2E2E2E] to-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FF004D%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)] opacity-30"></div> 
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible['final-cta'] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-12">

              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold">
                  🌐 Mati Studio é site com{' '}
                  <span className="text-[#FF004D]">inteligência.</span> 
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Todo profissional que leva o trabalho a sério merece um site de verdade.
                </p>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isVisible['final-cta'] ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#FF004D] hover:bg-[#D90042] text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group">

                    <MessageCircle className="mr-3 w-6 h-6" />
                    Quero meu site agora
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-sm opacity-75"
                initial={{ opacity: 0 }}
                animate={isVisible['final-cta'] ? { opacity: 0.75 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}>

                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#FF004D]" /> 
                  <span>Entrega garantida em 3 dias</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-[#FF004D]" /> 
                  <span>Suporte incluso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-[#FF004D]" /> 
                  <span>Feito por IA especializada</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: ["0 10px 25px rgba(34, 197, 94, 0.3)", "0 15px 35px rgba(34, 197, 94, 0.5)", "0 10px 25px rgba(34, 197, 94, 0.3)"]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}>

              <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <ExitIntentPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        whatsappLink={whatsappLink} />

    </>);

}
