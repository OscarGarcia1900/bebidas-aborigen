"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { stories } from '@/data/stories';

export default function StoriesPage() {
  const [dept, setDept] = useState<string | 'Todos'>('Todos');
  const departments = useMemo(
    () => Array.from(new Set(stories.map((s) => s.department))),
    []
  );
  const filtered = useMemo(
    () => (dept === 'Todos' ? stories : stories.filter((s) => s.department === dept)),
    [dept]
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Historias</h1>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setDept('Todos')}
          className={`rounded-md border px-3 py-1 ${dept === 'Todos' ? 'bg-[--primary] text-background' : ''}`}
        >
          Todos
        </button>
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={`rounded-md border px-3 py-1 ${dept === d ? 'bg-[--primary] text-background' : ''}`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <Link key={s.id} href={`/stories/${s.id}`} className="group overflow-hidden rounded-md border">
            {s.imageUrl && (
              <Image src={s.imageUrl} width={800} height={500} alt={s.title} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
            )}
            <div className="p-4">
              <div className="text-sm text-[--secondary]">{s.department}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 line-clamp-2 text-[--secondary]">{s.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
