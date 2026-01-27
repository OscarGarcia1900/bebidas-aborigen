import Image from 'next/image';
import { notFound } from 'next/navigation';
import { stories } from '@/data/stories';

export default async function StoryDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = stories.find((s) => s.id === id);
  if (!story) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-sm text-[--secondary]">{story.department}</div>
      <h1 className="mt-1 text-3xl font-bold">{story.title}</h1>
      {story.imageUrl && (
        <Image
          src={story.imageUrl}
          width={1200}
          height={700}
          alt={story.title}
          className="my-6 h-64 w-full rounded-md object-cover"
        />
      )}
      <article className="prose prose-invert max-w-none">
        <p>{story.content}</p>
      </article>
    </main>
  );
}
