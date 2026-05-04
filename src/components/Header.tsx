import Link from 'next/link';

export function Header() {
  return (
    <header className="app-header">
      <Link href="/" className="brand">OpsBoard</Link>
      <nav>
        <Link href="/">タスク</Link>
        <Link href="/insights">インサイト</Link>
      </nav>
    </header>
  );
}
