import Link from 'next/link';
import type { Task } from '@/lib/mockApi';
import { formatDate, priorityLabel, statusLabel } from '@/lib/format';

export function TaskCard({ task }: { task: Task }) {
  return (
    <article className="task-card">
      <div className="task-card__meta">
        <span>{statusLabel(task.status)}</span>
        <span>優先度: {priorityLabel(task.priority)}</span>
      </div>
      <h2>{task.title}</h2>
      <p>{task.summary}</p>
      <div className="task-card__footer">
        <span>{task.customer}</span>
        <span>期限 {formatDate(task.dueDate)}</span>
      </div>
      <Link href={`/tasks/${task.id}`}>詳細を見る</Link>
    </article>
  );
}
