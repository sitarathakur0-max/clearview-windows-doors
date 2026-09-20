import { GalleryItem } from '../types';
import heroImg from '../assets/images/hero_london_home_1789799876708.jpg';
import windowsImg from '../assets/images/casement_sash_windows_1789799894039.jpg';
import bifoldImg from '../assets/images/bifold_patio_doors_1789799908786.jpg';
import frontDoorImg from '../assets/images/composite_front_door_1789799923724.jpg';
import craftsmanshipImg from '../assets/images/window_craftsmanship_1789799940120.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Period London Townhouse Window & Door Façade",
    category: "glazing",
    description: "Inspirational architectural exterior displaying clean sash and casement glazing alongside an elegant front entrance design.",
    type: "inspiration",
    image: heroImg,
    tag: "Architectural Showcase"
  },
  {
    id: "gal-2",
    title: "Precision Sash & Casement Glazing",
    category: "windows",
    description: "Inspirational design concept highlighting white flush-joint casement windows with clean sightlines and high light transmission.",
    type: "inspiration",
    image: windowsImg,
    tag: "Design Inspiration"
  },
  {
    id: "gal-3",
    title: "Contemporary Bi-Fold Garden Living Extension",
    category: "doors",
    description: "Inspirational installation concept showing multi-panel dark aluminium bi-folding doors connecting interior living space to the terrace.",
    type: "inspiration",
    image: bifoldImg,
    tag: "Living Space Concept"
  },
  {
    id: "gal-4",
    title: "Bespoke Navy Composite Entrance Door",
    category: "doors",
    description: "Inspirational entrance styling featuring a deep navy composite door with satin metallic hardware and frosted privacy glazing.",
    type: "inspiration",
    image: frontDoorImg,
    tag: "Entrance Showcase"
  },
  {
    id: "gal-5",
    title: "Glazing Craftsmanship & Weather-Tight Seal Fitting",
    category: "windows",
    description: "Craftsmanship showcase demonstrating accurate frame rebate alignment and precision perimeter sealing.",
    type: "inspiration",
    image: craftsmanshipImg,
    tag: "Installation Detail"
  }
];
