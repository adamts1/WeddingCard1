/**
 * Design 5 – tropical/India themed video hero variant
 */

import heroVideo from '../../../assets/design5/main.mp4'
import detailsImg from '../../../assets/design5/details.png'
import rsvpImg from '../../../assets/design5/rsvp.png'

export const config = {
  title: 'שרה ואדם - Save the Date',
  description: 'Save the Date! 25.05.26 – האגם, ירושלים',
  lang: 'he',
  dir: 'rtl',

  palette: {
    cream: { DEFAULT: '#FAF5E6', light: '#FFFBEF', dark: '#EFE8D2' },
    leaf: { DEFAULT: '#2E7D4F', light: '#4CA26A', dark: '#1E5233' },
    accent: { DEFAULT: '#C0392B', light: '#E05B48', dark: '#8E2418' },
    gold: { DEFAULT: '#D4AF37', light: '#E6CC6A', dark: '#B8960E' },
    olive: { DEFAULT: '#2C2C2C', light: '#555555', muted: '#444444' },
  },

  targetDate: new Date(2026, 4, 25, 19, 0, 0),

  videos: { heroVideo },
  images: { detailsImg, rsvpImg },

  couple: {
    person1: { name: 'שרה', color: '#1E5233' },
    person2: { name: 'אדם', color: '#1E5233' },
  },

  parents: {
    bride: { label: 'הורי הכלה', names: 'דליה וחיים אלפסי' },
    groom: { label: 'הורי החתן', names: 'אתי ואיתן כסלר' },
  },

  event: {
    blessing: 'בשמחה גדולה ובהתרגשות עמוקה\nנשמח להזמינכם לקחת חלק\nביום המיוחד שלנו',
    verse: '״עוד ישמע בערי יהודה ובחוצות ירושלים, קול ששון וקול שמחה קול חתן וקול כלה״',
    verseSource: '(ירמיהו ל״ג)',
    dateText: '25.05.26',
    ceremonyText: 'חופה וקידושין',
    ceremonyTime: '20:00',
    receptionText: 'קבלת פנים 19:30',
    venueName: 'האגם',
    venueCity: 'ירושלים',
    navigationUrl: 'https://www.google.com/maps/place/%D7%94%D7%90%D7%92%D7%9D,+%D7%91%D7%99%D7%AA+%D7%96%D7%99%D7%AA%E2%80%AD/data=!4m2!3m1!1s0x1502d70fc0cc7f19:0xb67ede23018df113?sa=X&ved=1t:242&ictx=111',
  },

  contacts: [
    { name: 'שרה', phone: '000-0000000', tel: '+0000000000' },
    { name: 'אדם', phone: '000-0000000', tel: '+0000000000' },
  ],

  rsvp: {
    titleColor: '#1E5233',
    submitButtonColor: '#C0392B',
    submitButtonHoverColor: '#8E2418',
    celebrationColors: ['#2E7D4F', '#4CA26A', '#C0392B', '#E05B48', '#D4AF37', '#FAF5E6', '#1E5233', '#E6CC6A'],
    sectionBg: 'bg-transparent',
    lang: 'he',
  },
}

export default config
