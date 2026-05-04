import { fetchTasks } from '@/lib/mockApi';

export default async function InsightsPage() {
  const tasks = await fetchTasks();
  const active = tasks.filter((task) => task.status !== 'done').length;
  const high = tasks.filter((task) => task.priority === 'high').length;

  return (
    <section>
      <div className="hero">
        <p>インサイト</p>
        <h1>改善対象の傾向を見る</h1>
        <span>情報設計・可視化改善の練習用ページです</span>
      </div>
      <div className="stats-grid">
        <div><strong>{tasks.length}</strong><span>総タスク</span></div>
        <div><strong>{active}</strong><span>未完了</span></div>
        <div><strong>{high}</strong><span>高優先度</span></div>
      </div>
      <div className="detail-card">
        <h2>現状の課題</h2>
        <p>数値は表示されているが、どの指標を見るべきか、次にどのタスクへ移るべきかが分かりにくい状態です。</p>
      </div>
    </section>
  );
}
