export type IBranding = {
    id: string;
    alt: string;
    image: string; // ou le type approprié pour l'image
}

export type IFeature = {
    id: string;
    alt: string;
    image: string; // ou le type approprié pour l'image
    title: string;
    text: string;
}

export type IBulletPoint ={
    id: string;
    alt: string;
    image: string; // ou le type approprié pour l'image
    width: number;
    height: number;
    title: string;
    text: string;
  }

 


export type IPricing = {
    id: string;
    plan: string;
    amount: number;
    featured: boolean;
    features: string[];
}

export type ISocial = {
    id: string;
    ico: string;
    alt: string;
    link: string;
}