import heroImg from '../../../assets/design6/hero.png'

export default function Design6Page() {
  return (
    <div className="min-h-screen-dvh md:min-h-screen bg-black" dir="rtl" lang="he">
      <section className="relative w-full min-h-screen-dvh md:min-h-screen overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>
    </div>
  )
}
