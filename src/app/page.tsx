import { TaskCard } from '@/components/TaskCard';
import { fetchTasks } from '@/lib/mockApi';

export default async function HomePage() {
  const tasks = await fetchTasks();

  return (
    <section>
      <div className="hero">
        <p>カスタマーサクセス向け業務管理</p>
        <h1>対応タスクを確認する</h1>
        <span>※この画面はUI改善前のたたき台です</span>
      </div>

      <div className="toolbar">
        <input placeholder="タスクを検索" aria-label="タスクを検索" />
        <select aria-label="ステータスで絞り込み">
          <option>すべて</option>
          <option>未着手</option>
          <option>進行中</option>
          <option>完了</option>
        </select>
      </div>

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
