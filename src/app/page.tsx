export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-16 pt-10">
      <section className="rounded-[2rem] bg-[var(--surface)] px-6 py-8 shadow-[0_18px_60px_rgba(120,78,65,0.12)]">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
          Jenn Birthday 2027
        </p>
        <h1 className="mt-4 text-5xl leading-none">
          A single-page story timeline, built for mobile.
        </h1>
        <p className="mt-5 text-[15px] leading-7 text-[var(--muted)]">
          The Next.js foundation is now in place. This homepage will become the
          full birthday experience: one scrolling story, one emotional arc, and
          no separate pages.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        {[
          {
            title: "Opening message",
            body: "A hero section with the first birthday note and the tone for the full story.",
          },
          {
            title: "Memory chapters",
            body: "A sequence of relationship moments with dates, short captions, and photos.",
          },
          {
            title: "Closing note",
            body: "A final section that lands the story with a personal ending.",
          },
        ].map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-[rgba(184,107,95,0.14)] bg-white/70 px-5 py-5"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
