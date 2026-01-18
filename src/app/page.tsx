import { Button } from '@/shared/ui';
// import Image from 'next/image';

export default function Home() {
  return (
    <section className="size-full flex flex-col justify-between">
      {/* <ul>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <article key={index}>
              <Image src="/globe.svg" alt="quiz" width={50} height={50} />
            </article>
          );
        })}
      </ul> */}
      <Button
        className="mx-auto mb-4 cursor-pointer w-4/5 h-10 border-2 rounded-2xl border-amber-50/50"
        type="generated"
      />
    </section>
  );
}
