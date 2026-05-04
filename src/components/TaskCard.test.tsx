import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TaskCard } from './TaskCard';

const task = {
  id: 't-999',
  title: 'テスト用タスク',
  customer: 'テスト会社',
  status: 'todo',
  priority: 'high',
  dueDate: '2026-05-10',
  summary: 'テスト用の説明です。',
  notes: []
} as const;

describe('TaskCard', () => {
  it('タスク名と顧客名を表示する', () => {
    render(<TaskCard task={task} />);
    expect(screen.getByText('テスト用タスク')).toBeInTheDocument();
    expect(screen.getByText('テスト会社')).toBeInTheDocument();
  });
});
