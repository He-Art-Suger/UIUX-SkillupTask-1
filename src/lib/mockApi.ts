export type Task = {
  id: string;
  title: string;
  customer: string;
  status: 'todo' | 'doing' | 'done';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  summary: string;
  notes: string[];
};

const tasks: Task[] = [
  {
    id: 't-001',
    title: '請求書アップロード画面の改善',
    customer: '株式会社Northwind',
    status: 'doing',
    priority: 'high',
    dueDate: '2026-05-08',
    summary: 'エラー時の原因が分かりづらく、経理担当者から問い合わせが増えている。',
    notes: ['PDF以外をアップロードした時の案内が弱い', '成功後に次に何をすべきか分かりにくい']
  },
  {
    id: 't-002',
    title: '通知設定の整理',
    customer: 'Blue Design合同会社',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-05-12',
    summary: '通知項目が多く、重要な通知だけを選びたいという要望がある。',
    notes: ['カテゴリ分けがない', '保存完了のフィードバックが弱い']
  },
  {
    id: 't-003',
    title: '月次レポートの見やすさ改善',
    customer: 'Sakura Foods',
    status: 'done',
    priority: 'low',
    dueDate: '2026-05-01',
    summary: '数値の羅列が多く、初見ユーザーが重要指標を把握しにくい。',
    notes: ['KPIの優先順位が見えない', 'スマホ表示で表が崩れやすい']
  }
];

export async function fetchTasks(): Promise<Task[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return tasks;
}

export async function fetchTask(id: string): Promise<Task | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return tasks.find((task) => task.id === id);
}
