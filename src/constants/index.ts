import Next from "@/components/icons/Next.astro";
import Supabase from "@/components/icons/Supabase.astro";
import Tailwind from "@/components/icons/Tailwind.astro";

type Project = {
  title: string;
  description: string;
  link: string;
  github?: string;
  imageUrl: string;
  imageAlt: string;
  tags: Tag[];
};

export type Tag = {
  name: string;
  class: string;
  icon: any;
};

type DefinedTags = {
  NEXT: Tag;
  TAILWIND: Tag;
  SUPABASE: Tag;
};

export const TAGS: DefinedTags = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: Next,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  SUPABASE: {
    name: "Supabase",
    class: "bg-[#37996B] text-white",
    icon: Supabase,
  },
};
