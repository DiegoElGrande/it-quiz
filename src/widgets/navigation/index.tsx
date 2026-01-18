import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="w-full pb-3 h-18 border-t-2 border-zinc-500/50 rounded-t-2xl shadow-2xl shadow-zinc-50 flex justify-around items-center">
      <Link href="/">Home</Link>
      <Link href="/history">History</Link>
      <Link href="/quiz">Quiz</Link>
    </nav>
  );
}
