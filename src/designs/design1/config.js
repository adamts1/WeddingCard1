/**
 * Design 1 configuration – יעל ואבירם
 * All design-specific content: text, colors, dates, contacts, images.
 */

import heroImage from '../../../assets/design1/main.png'
import flower1 from '../../../assets/design1/flower1.png'
import flower2 from '../../../assets/design1/flower2.png'
import footerImg from '../../../assets/design1/footer.png'
import huppaImg from '../../../assets/design1/huppa.png'
import rsvpImg from '../../../assets/design1/rsvp.png'

export const config = {
  // ── Meta ──
  title: 'יעל ואבירם - הזמנה לחתונה',
  description: 'שמחים להזמינכם לחגוג עמנו! כ״ה במאי 2026',
  lang: 'he',
  dir: 'rtl',

  // ── Colors (palette) ──
  palette: {
    cream: { DEFAULT: '#F6F4F0', light: '#F6F4F0', dark: '#F6F4F0' },
    blush: { DEFAULT: '#E8A0B5', light: '#F0D4DE', dark: '#D4789A' },
    magenta: { DEFAULT: '#CF43A8', light: '#D96CBB', dark: '#B8368F' },
    green: { DEFAULT: '#508330', light: '#7CB342', dark: '#3B6B2B' },
    olive: { DEFAULT: '#111827', light: '#111827', muted: '#111827' },
  },

  // ── Date ──
  targetDate: new Date(2026, 4, 25, 19, 0, 0), // May 25, 2026 at 7:00 PM

  // ── Images ──
  images: { heroImage, flower1, flower2, footerImg, huppaImg, rsvpImg },

  // ── Couple ──
  couple: {
    person1: { name: 'יעל', color: '#CF43A8' },
    person2: { name: 'אבירם', color: '#508330' },
  },

  // ── Parents ──
  parents: {
    bride: { label: 'הורי הכלה', names: 'יצחק ודנית כהן' },
    groom: { label: 'הורי החתן', names: 'שלומית ואורי לוי' },
  },

  // ── Event details ──
  event: {
    invitationText: 'שמחים להזמינכם לחגוג עמנו את חתונתנו',
    dateText: 'כ״ה במאי 2026',
    receptionText: 'קבלת פנים בשעה 19:00',
    ceremonyText: 'חופה וקידושין בשעה 20:00',
    venueName: 'EAST TEL AVIV',
    wazeUrl: 'https://waze.com/ul?q=123%20Anywhere%20St%20Any%20City',
  },

  // ── Contacts ──
  contacts: [
    { name: 'יעל', phone: '000-0000000', tel: '+0000000000' },
    { name: 'אבירם', phone: '000-0000000', tel: '+0000000000' },
  ],

  // ── RSVP config ──
  rsvp: {
    titleColor: '#CF43A8',
    submitButtonColor: 'transparent',
    submitButtonHoverColor: 'transparent',
    submitButtonBorderColor: '#CF44A8',
    submitButtonTextColor: '#000000',
    celebrationColors: ['#E8A0B5', '#CF43A8', '#D4789A', '#F0D4DE', '#508330', '#7CB342', '#FFD700', '#F472B6'],
    lang: 'he',
    labels: { rsvp: '', intro: '' },
  },
}

export default config
