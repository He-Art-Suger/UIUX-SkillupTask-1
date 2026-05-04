import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchTask } from '@/lib/mockApi';
import { formatDate, priorityLabel, statusLabel } from '@/lib/format';

export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const task = await fetchTask(id);
  if (!task) notFound();

  return (
    <section className="detail-layout">
      <Link href="/">← 一覧に戻る</Link>
      <div className="detail-card">
        <p>{task.customer}</p>
        <h1>{task.title}</h1>
        <dl>
          <div><dt>ステータス</dt><dd>{statusLabel(task.status)}</dd></div>
          <div><dt>優先度</dt><dd>{priorityLabel(task.priority)}</dd></div>
          <div><dt>期限</dt><dd>{formatDate(task.dueDate)}</dd></div>
        </dl>
      </div>
      <div className="detail-card">
        <h2>背景</h2>
        <p>{task.summary}</p>
        <h2>ユーザーの声</h2>
        <ul>
          {task.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </div>
      <button className="primary-button">改善案を保存</button>
    </section>
  );
}
