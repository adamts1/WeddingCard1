/**
 * Design 2 configuration – דנה ואופיר – Save the Date
 */

import illustrationImg from '../../../assets/design2/image.png'
import textImg from '../../../assets/design2/text.png'
import bgImg from '../../../assets/design2/bg.png'
import huppa1 from '../../../assets/design2/huppa1.png'
import huppa2 from '../../../assets/design2/huppa2.png'


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
    magenta: { DEFAULT: '#A78BCF' },
    green: { DEFAULT: '#A78BCF', light: '#C4AEDF', dark: '#8A6BB5' },
    olive: { DEFAULT: '#5C5C42', light: '#7A7A5E', muted: '#6E6E52' },
  },

  // ── Date ──
  targetDate: new Date(2026, 8, 20, 19, 0, 0), // September 20, 2026 at 7:00 PM

  // ── Images ──
  images: { illustrationImg, textImg, bgImg, huppa1, huppa2 },

  // ── Couple ──
  couple: {
    person1: { name: 'דנה', color: '#5C5C42' },
    person2: { name: 'אופיר', color: '#A78BCF' },
  },

  // ── Parents ──
  parents: {
    bride: { label: 'הורי הכלה', names: 'דנית ואריה וקסלר' },
    groom: { label: 'הורי החתן', names: 'שלומית ואיתן דאונוב' },
  },

  // ── Event details ──
  event: {
    invitationText: 'בשמחה רבה ובהודיה אינסופית לה\' אנו שמחים להזמינכם לחגוג עמנו   ',
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
    titleColor: '#A78BCF',
    submitButtonColor: '#A78BCF',
    submitButtonHoverColor: '#C4AEDF',
    celebrationColors: ['#C5B9A8', '#A78BCF', '#C4AEDF', '#DDD5C9', '#A89B8A', '#5C5C42', '#D4C9B8', '#8A6BB5'],
    sectionBg: 'bg-transparent',
    lang: 'he',
  },
}

export default config
