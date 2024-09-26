import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title: string; // @format rich-text
  subtitle?: string; // @format textarea
  content?: HTMLWidget;
}

export default function RichTextSection({ title, subtitle, content }: Props) {
  return (
    <section class="py-12 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p class="text-xl text-gray-600 mb-8">{subtitle}</p>}
        {content && (
          <div class="prose prose-lg max-w-none mx-auto">
            <content.HTML />
          </div>
        )}
      </div>
    </section>
  );
}