// import Image from "next/image"

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-12 gap-8 items-center">
      <div className="col-start-1 col-span-8 space-y-6">
        {/*<div className="w-48">*/}
        <div className="">
          <img
            src="/sig_logo.png"
            alt="Signature"
            width={330}
            // height={200}
            // className="w-full"
          />
        </div>
        <p className="text-3xl font-extrabold leading-relaxed text-[#3B432B]">
          I empower creative entrepreneurs and mission-driven organizations to build
          businesses and products that scale sustainably.
        </p>
        <a
          href="#connect"
          className="inline-block bg-[#3B432B] text-white px-12 py-6 text-md font-extrabold uppercase hover:bg-opacity-90 transition-colors"
        >
          Let's Connect
        </a>
      </div>
      {/*<div className="relative h-[400px]">*/}
      <div className="col-start-9 col-span-3">
        <img
          src="/portrait.jpg"
          alt="Professional portrait"
          width={390}
          // height={382}
          // fill
          className="object-cover max-w-max border-2 border-[#3B432B]"
        />
      </div>
    </section>
  )
}

