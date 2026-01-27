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
          className={`rounded-md border px-3 py-1 transition-colors ${dept === 'Todos' ? 'bg-[#8b4513] text-white border-[#8b4513]' : 'border-[#d4c5b0] hover:bg-[#f8f5f0]'}`}
        >
          Todos
        </button>
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={`rounded-md border px-3 py-1 transition-colors ${dept === d ? 'bg-[#8b4513] text-white border-[#8b4513]' : 'border-[#d4c5b0] hover:bg-[#f8f5f0]'}`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <Link key={s.id} href={`/stories/${s.id}`} className="group overflow-hidden rounded-xl border-2 border-[#d4c5b0] bg-white shadow-sm hover:shadow-lg transition-all">
            {s.imageUrl && (
              <div className="overflow-hidden bg-[#f8f5f0] flex items-center justify-center h-64">
                <Image src={s.imageUrl} width={800} height={500} alt={s.title} className="w-full h-full object-contain transition-transform group-hover:scale-105" />
              </div>
            )}
            <div className="p-4">
              <div className="text-sm text-[#d4a574] font-medium">📍 {s.department}</div>
              <h3 className="mt-1 text-lg font-bold text-[#2c1810]">{s.title}</h3>
              <p className="mt-2 line-clamp-2 text-[#5c4033]">{s.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
