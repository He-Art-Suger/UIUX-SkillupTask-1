import type { Task } from './mockApi';

export function statusLabel(status: Task['status']): string {
  return { todo: '未着手', doing: '進行中', done: '完了' }[status];
}

export function priorityLabel(priority: Task['priority']): string {
  return { high: '高', medium: '中', low: '低' }[priority];
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('ja-JP', { month: 'short', day: 'numeric', weekday: 'short' }).format(new Date(date));
}
