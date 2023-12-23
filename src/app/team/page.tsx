import Freelancer from '@/components/team/Freelancer';

export default function TeamPage() {
  return (
    <>
      <article className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-bold tracking-tight text-black">
          Meet our team
        </h2>
        <p className="text-lg leading-8 text-black">
          We're a dynamic group of individuals who are passionate about what we
          do.
        </p>
      </article>
      <article className="grid grid-cols-3 gap-8">
        <Freelancer />
        <Freelancer />
        <Freelancer />
        <Freelancer />
        <Freelancer />
      </article>
    </>
  );
}
