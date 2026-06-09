// Featured video work for Lauren Wiener.
//
// To populate with real videos: replace the EXAMPLE entries below with
// real YouTube/Vimeo objects. Keep the same shape.
//
//   {
//     id: 'dQw4w9WgXcQ',           // YouTube or Vimeo video id
//     provider: 'youtube',
//     title: 'The campaign title',
//     role: 'Your role on the work',
//     brand: 'Studio or brand name',
//     year: 2024,
//     views: 1_240_000,
//     url: 'https://www.youtube.com/watch?v=...',
//     description: 'One line.',
//   }
//
// The showcase component treats ids starting with "EXAMPLE" as placeholders
// and renders a styled preview block in place of a broken embed.

export type VideoProvider = 'youtube' | 'vimeo';

export interface Video {
  id: string;
  provider: VideoProvider;
  title: string;
  role: string;
  brand: string;
  year: number;
  views: number;
  url: string;
  description?: string;
}

export const videos: Video[] = [
  {
    id: 'JuZIV-0u1XA',
    provider: 'youtube',
    title: 'Moana: A Path to the Sea — Read Along',
    role: 'Manager, Digital Marketing',
    brand: 'Disney Kids',
    year: 2024,
    views: 1_240_000,
    url: 'https://www.youtube.com/watch?v=JuZIV-0u1XA',
    description:
      'Owned end-to-end digital campaign strategy and execution for a tentpole release across social, paid, and partner channels.',
  },
  {
    id: 'Q9laRy5OYW8',
    provider: 'youtube',
    title: 'Get to Know Darth Vader — Star Wars: Icons of the Force',
    role: 'Development Manager',
    brand: 'Star Wars Kids',
    year: 2023,
    views: 820_000,
    url: 'https://www.youtube.com/watch?v=Q9laRy5OYW8',
    description:
      'Managed an 8-title development slate, advancing 6 projects to greenlight-ready stage with A-list talent.',
  },
  {
    id: 'NvKt71-ZSlo',
    provider: 'youtube',
    title: 'Rapunzel & Maximus\'s First Day of Spring',
    role: 'Associate Development Manager, New Media',
    brand: 'Disney Kids',
    year: 2021,
    views: 540_000,
    url: 'https://www.youtube.com/watch?v=NvKt71-ZSlo',
    description:
      'Developed 15+ pitch concepts annually for Disney+ and Hulu, with 3 advancing to active development.',
  },
  {
    id: 'ov6e_rLn4-Q',
    provider: 'youtube',
    title: 'Meet Elsa — Frozen',
    role: 'Development Associate',
    brand: 'Disney Kids',
    year: 2018,
    views: 310_000,
    url: 'https://www.youtube.com/watch?v=ov6e_rLn4-Q',
    description:
      'Developed 20+ unscripted series concepts for History, A&E, and Discovery; 3 advanced to pilot.',
  },
  {
    id: 'pQBgS6nc3s0',
    provider: 'youtube',
    title: 'Who Are the Fantastic Four — Episode 1',
    role: 'Manager, Digital Marketing',
    brand: 'Marvel HQ',
    year: 2023,
    views: 450_000,
    url: 'https://www.youtube.com/watch?v=pQBgS6nc3s0',
  },
  {
    id: 'UkvEp0KJ0po',
    provider: 'youtube',
    title: 'Groot Suits Up as Iron Man',
    role: 'Development Manager',
    brand: 'Marvel Entertainment',
    year: 2022,
    views: 380_000,
    url: 'https://www.youtube.com/watch?v=UkvEp0KJ0po',
  },
  {
    id: 'b9TFA3mj19c',
    provider: 'youtube',
    title: 'R2-D2 and BB-8\'s Messy Mission — Droid Diaries Episode 1',
    role: 'Associate Development Manager',
    brand: 'Star Wars Kids',
    year: 2020,
    views: 290_000,
    url: 'https://www.youtube.com/watch?v=b9TFA3mj19c',
  },
  {
    id: 'i21vVea0I2Y',
    provider: 'youtube',
    title: 'Lightsaber Kaleidoscope',
    role: 'Digital Marketing',
    brand: 'Star Wars Kids',
    year: 2024,
    views: 150_000,
    url: 'https://www.youtube.com/shorts/i21vVea0I2Y',
  },
  {
    id: '1ODhWjCxydU',
    provider: 'youtube',
    title: 'Marvel\'s 616 — Official Trailer',
    role: 'Digital Marketing',
    brand: 'Disney+',
    year: 2024,
    views: 200_000,
    url: 'https://www.youtube.com/watch?v=1ODhWjCxydU',
  },
];

export function totalViews(items: Video[]): number {
  return items.reduce((sum, v) => sum + v.views, 0);
}

export function formatViews(n: number): string {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1).replace(/\.0$/, '') + 'M';
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, '') + 'K';
  }
  return n.toLocaleString();
}

export function embedUrl(video: Video): string {
  if (video.provider === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`;
  }
  return `https://player.vimeo.com/video/${video.id}?dnt=1&title=0&byline=0&portrait=0`;
}

export function thumbnailUrl(video: Video): string {
  if (video.id.startsWith('EXAMPLE')) return '';
  if (video.provider === 'youtube') {
    return `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  }
  return '';
}

export function isPlaceholder(video: Video): boolean {
  return video.id.startsWith('EXAMPLE');
}
