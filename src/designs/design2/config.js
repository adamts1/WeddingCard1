/**
 * Design 2 configuration – דנה ואופיר – Save the Date
 */

import illustrationImg from '../../../assets/design2/image.png'
import textImg from '../../../assets/design2/text.png'
import section2Img from '../../../assets/design2/sec2.png'
import bgImg from '../../../assets/design2/bg.png'

export const config = {
  // ── Meta ──
  title: 'דנה ואופיר - Save the Date',
  description: 'Save the Date! 20.09.26 – קיבוץ שדות ים',
  lang: 'he',
  dir: 'rtl',

  // ── Colors ──
  palette: {
    cream: { DEFAULT: '#FAFAF8', light: '#FFFFFF', dark: '#F0F0EC' },
    blush: { DEFAULT: '#C5B9A8', light: '#DDD5C9', dark: '#A89B8A' },
    magenta: { DEFAULT: '#6B7B4C' },
    green: { DEFAULT: '#6B7B4C', light: '#8A9B6A', dark: '#4F5C38' },
    olive: { DEFAULT: '#5C5C42', light: '#7A7A5E', muted: '#6E6E52' },
  },

  // ── Date ──
  targetDate: new Date(2026, 8, 20, 19, 0, 0), // September 20, 2026 at 7:00 PM

  // ── Images ──
  images: { illustrationImg, textImg, section2Img, bgImg },

  // ── Couple ──
  couple: {
    person1: { name: 'דנה', color: '#5C5C42' },
    person2: { name: 'אופיר', color: '#6B7B4C' },
  },

  // ── Parents ──
  parents: {
    bride: { label: 'הורי הכלה', names: 'דנית ואריה וקסלר' },
    groom: { label: 'הורי החתן', names: 'שלומית ואיתן דאונוב' },
  },

  // ── Event details ──
  event: {
    invitationText: 'שמחים ונרגשים לחגוג אתנו את היום המאושר בחיינו',
    dateText: '20.09.26',
    receptionText: 'קבלת פנים 19:30',
    ceremonyText: 'חופה וקידושין',
    ceremonyTime: '20:00',
    venueName: 'קיבוץ שדות ים',
    wazeUrl: 'https://waze.com/ul?q=%D7%A7%D7%99%D7%91%D7%95%D7%A5%20%D7%A9%D7%93%D7%95%D7%AA%20%D7%99%D7%9D',
  },

  // ── Contacts ──
  contacts: [
    { name: 'דנה', phone: '000-0000000', tel: '+0000000000' },
    { name: 'אופיר', phone: '000-0000000', tel: '+0000000000' },
  ],

  // ── RSVP config ──
  rsvp: {
    titleColor: '#6B7B4C',
    submitButtonColor: '#6B7B4C',
    submitButtonHoverColor: '#8A9B6A',
    celebrationColors: ['#C5B9A8', '#6B7B4C', '#8A9B6A', '#DDD5C9', '#A89B8A', '#5C5C42', '#D4C9B8', '#7A8B5C'],
    sectionBg: 'bg-transparent',
    lang: 'he',
  },
}

export default config
