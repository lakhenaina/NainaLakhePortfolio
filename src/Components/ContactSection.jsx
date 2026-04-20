function ContactSection() {
  return (
    <section className="text-slate-200">
      {/* Title */}
      {/* <h2 className="text-2xl font-semibold text-slate-50 mb-2">
        Contact
      </h2>
      <div className="h-1 w-10 rounded-full bg-yellow-400 mb-6" /> */}

      {/* Map full width */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-[#252536] bg-[#15151f] shadow-[0_0_25px_rgba(0,0,0,0.6)]">
        {/* Replace src with your own embed if you want a different location */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.419294872796!2d85.43280387517002!3d27.673432826986982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aad7a6c0001%3A0xc28ecfd4c98a91f4!2zRGF0dGF0cmF5YSBUZW1wbGUg4KSm4KSk4KWN4KSk4KS-4KSk4KWN4KSw4KSvIOCkruCkqOCljeCkpuCkv-CksA!5e0!3m2!1sen!2snp!4v1775662850669!5m2!1sen!2snp bg-zinc-900"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form heading */}
      <h3 className="text-2xl font-semibold text-slate-50 mb-3">
        Contact Form
      </h3>

      {/* Contact Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Name + Email row */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              type="text"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none text-slate-100 focus:border-yellow-600"
              placeholder="Full Name"
            />
          </div>

          <div>
            <input
              type="email"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none text-slate-100 focus:border-yellow-600"
              placeholder="Email Address"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            rows={5}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none text-slate-100 focus:border-yellow-600 resize-none"
            placeholder="Your message"
          />
        </div>

        {/* Button row - right aligned on larger screens */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-2 rounded-xl bg-yellow-600 px-6 py-2 text-sm font-semibold text-[#111118] transition hover:bg-yellow-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactSection