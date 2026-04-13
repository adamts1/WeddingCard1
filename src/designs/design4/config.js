/**
 * Design 4 – video hero variant
 */

import heroVideo from '../../../assets/design4/main.mp4'
import oneVideo from '../../../assets/design4/one.mp4'
import detailsImg from '../../../assets/design4/two.png'
import footerImg from '../../../assets/design4/footer.png'
import jerusalemImg from '../../../assets/design3/second.png'
import topImg from '../../../assets/design3/top.png'

export const config = {
  title: 'ציפורה ורונן - Save the Date',
  description: 'Save the Date! 30.04.26 – האגם, ירושלים',
  lang: 'he',
  dir: 'rtl',

  palette: {
    cream: { DEFAULT: '#FAFAF8', light: '#FFFFFF', dark: '#F0F0EC' },
    blush: { DEFAULT: '#C9B99A', light: '#DDD1B8', dark: '#A89B7A' },
    magenta: { DEFAULT: '#D4AF37' },
    green: { DEFAULT: '#D4AF37', light: '#E6CC6A', dark: '#B8960E' },
    olive: { DEFAULT: '#2C2C2C', light: '#555555', muted: '#444444' },
  },

  targetDate: new Date(2026, 3, 30, 19, 0, 0),

  videos: { heroVideo, oneVideo },
  images: { jerusalemImg, topImg, detailsImg, footerImg },

  couple: {
    person1: { name: 'ציפורה', color: '#2C2C2C' },
    person2: { name: 'רונן', color: '#2C2C2C' },
  },

  parents: {
    bride: { label: 'הורי הכלה', names: 'דליה וחיים אלפסי' },
    groom: { label: 'הורי החתן', names: 'אתי ואיתן כסלר' },
  },

  event: {
    blessing: 'בשמחה גדולה ובהתרגשות עמוקה\nנשמח להזמינכם לקחת חלק\nביום המיוחד שלנו',
    verse: '״עוד ישמע בערי יהודה ובחוצות ירושלים, קול ששון וקול שמחה קול חתן וקול כלה״',
    verseSource: '(ירמיהו ל״ג)',
    dateText: '30.04.26',
    ceremonyText: 'חופה וקידושין',
    ceremonyTime: '20:00',
    receptionText: 'קבלת פנים 19:30',
    venueName: 'האגם',
    venueCity: 'ירושלים',
    navigationUrl: 'https://www.google.com/maps/place/%D7%94%D7%90%D7%92%D7%9D,+%D7%91%D7%99%D7%AA+%D7%96%D7%99%D7%AA%E2%80%AD/data=!4m2!3m1!1s0x1502d70fc0cc7f19:0xb67ede23018df113?sa=X&ved=1t:242&ictx=111',
  },

  contacts: [
    { name: 'ציפורה', phone: '000-0000000', tel: '+0000000000' },
    { name: 'רונן', phone: '000-0000000', tel: '+0000000000' },
  ],

  rsvp: {
    titleColor: '#D4AF37',
    submitButtonColor: '#2C2C2C',
    submitButtonHoverColor: '#444444',
    celebrationColors: ['#D4AF37', '#E6CC6A', '#2C2C2C', '#C9B99A', '#FAFAF8', '#B8960E', '#DDD1B8', '#555555'],
    sectionBg: 'bg-transparent',
    lang: 'he',
  },
}

export default config
