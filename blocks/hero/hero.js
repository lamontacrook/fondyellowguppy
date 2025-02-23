import { createTag, decorateIcons, makeVideo } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const media = [
    'media="(min-width: 520px)"',
    ''
  ];

  decorateIcons(block);

  if (Object.values(block.classList).includes('video')) {
    const videoSrcs = block.querySelectorAll('a');  
    makeVideo(block.querySelector('div'), videoSrcs, media);
  }
}