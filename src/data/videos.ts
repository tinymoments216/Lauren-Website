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
    id: 'EXAMPLE_FEATURED',
    provider: 'youtube',
    title: 'Sample: A flagship digital campaign for a major theatrical release',
    role: 'Manager, Digital Marketing',
    brand: 'The Walt Disney Studios',
    year: 2024,
    views: 1_240_000,
    url: 'https://www.youtube.com',
    description:
      'Owned end-to-end digital campaign strategy and execution for a tentpole release across social, paid, and partner channels.',
  },
  {
    id: 'EXAMPLE_2',
    provider: 'youtube',
    title: 'Sample: New-series launch campaign',
    role: 'Development Manager',
    brand: 'Marvel Entertainment',
    year: 2023,
    views: 820_000,
    url: 'https://www.youtube.com',
    description:
      'Managed an 8-title development slate, advancing 6 projects to greenlight-ready stage with A-list talent.',
  },
  {
    id: 'EXAMPLE_3',
    provider: 'youtube',
    title: 'Sample: Streaming-first franchise piece',
    role: 'Associate Development Manager, New Media',
    brand: 'Marvel Entertainment',
    year: 2021,
    views: 540_000,
    url: 'https://www.youtube.com',
    description:
      'Developed 15+ pitch concepts annually for Disney+ and Hulu, with 3 advancing to active development.',
  },
  {
    id: 'EXAMPLE_4',
    provider: 'youtube',
    title: 'Sample: Unscripted pilot sizzle',
    role: 'Development Associate',
    brand: 'Leftfield Pictures',
    year: 2018,
    views: 310_000,
    url: 'https://www.youtube.com',
    description:
      'Developed 20+ unscripted series concepts for History, A&E, and Discovery; 3 advanced to pilot.',
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
