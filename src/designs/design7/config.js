/**
 * Design 7 – הלל ועדי – portrait paper/floral card.
 * Hero + details are full-bleed images with text baked in.
 * Only the RSVP image needs a live form overlaid below its baked-in title.
 */

import heroVideo from '../../../assets/design7/hero.mp4'
import detailsImg from '../../../assets/design7/2.png'
import rsvpImg from '../../../assets/design7/3.png'
import bgImg from '../../../assets/design7/background.png'

const gold = '#9C7C3C'
const goldDark = '#7E632E'

export const config = {
  title: 'הלל ועדי - הזמנה לחתונה',
  description: 'שמחים להזמינכם לשמחת נישואינו – 3.8.26, אולם אדמה, אשדוד',
  lang: 'he',
  dir: 'rtl',

  // Paper background colour, sampled from the images so overflow blends seamlessly.
  paperBg: '#F6F4ED',

  targetDate: new Date(2026, 7, 3, 19, 0, 0),

  videos: { heroVideo },
  images: { detailsImg, rsvpImg, bgImg },

  contacts: [
    { name: 'הלל', phone: '000-0000000', tel: '+0000000000' },
    { name: 'עדי', phone: '000-0000000', tel: '+0000000000' },
  ],

  rsvp: {
    // Title and intro are baked into the RSVP image, so suppress the duplicates.
    labels: { rsvp: '', intro: '' },
    titleColor: gold,
    submitButtonColor: gold,
    submitButtonHoverColor: goldDark,
    celebrationColors: ['#9C7C3C', '#C9A75A', '#E6CC8A', '#7E632E', '#F6F4ED', '#B8C5E0', '#F4D35E', '#D9A7C7'],
    sectionBg: 'bg-transparent',
    lang: 'he',
  },
}

export default config
