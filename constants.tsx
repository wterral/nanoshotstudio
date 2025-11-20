import { StyleOption } from './types';
import { Briefcase, Camera, Zap, User, Sun, Building, Coffee, Sparkles, Edit3 } from 'lucide-react';
import React from 'react';

export const PRESET_STYLES: StyleOption[] = [
  {
    id: 'corporate-grey',
    label: 'Corporate Grey',
    description: 'Clean, professional grey backdrop suitable for LinkedIn.',
    prompt: 'Change background to a professional studio grey backdrop. Improve lighting to be soft and flattering for a corporate headshot. Ensure attire looks professional.',
    icon: 'Briefcase',
    category: 'professional'
  },
  {
    id: 'modern-tech',
    label: 'Modern Tech Office',
    description: 'Blurred open-plan office background with glass and light.',
    prompt: 'Change background to a modern blurred tech office with glass walls and bokeh lighting. Give the subject a smart-casual tech industry look.',
    icon: 'Building',
    category: 'professional'
  },
  {
    id: 'outdoor-natural',
    label: 'Outdoor Natural',
    description: 'Soft natural lighting with a blurred park or city background.',
    prompt: 'Change background to a blurred outdoor park setting with golden hour sunlight. Make the lighting warm and natural.',
    icon: 'Sun',
    category: 'professional'
  },
  {
    id: 'studio-dark',
    label: 'Studio Dark',
    description: 'Dramatic lighting with a dark, moody background.',
    prompt: 'Change background to a dark, moody black studio backdrop. Use dramatic rim lighting to highlight the subject.',
    icon: 'Camera',
    category: 'creative'
  },
  {
    id: 'cafe-vibes',
    label: 'Casual Cafe',
    description: 'Relaxed atmosphere in a cozy coffee shop.',
    prompt: 'Place the subject in a cozy, blurred coffee shop environment. Warm lighting, relaxed and approachable vibe.',
    icon: 'Coffee',
    category: 'creative'
  },
  {
    id: 'retro-filter',
    label: 'Retro Film',
    description: 'Vintage film grain and color grading.',
    prompt: 'Apply a vintage 90s film aesthetic. Add grain, slight color shift, and a retro vibe while keeping the face clear.',
    icon: 'Zap',
    category: 'creative'
  }
];

// Icon mapping helper
export const getIcon = (name: string, className?: string) => {
  const props = { className };
  switch (name) {
    case 'Briefcase': return <Briefcase {...props} />;
    case 'Camera': return <Camera {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'User': return <User {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Building': return <Building {...props} />;
    case 'Coffee': return <Coffee {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Edit3': return <Edit3 {...props} />;
    default: return <Sparkles {...props} />;
  }
};
