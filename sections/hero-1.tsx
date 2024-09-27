import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @description Primary CTA text
   */
  primaryCta?: string;
  /**
   * @description Primary CTA URL
   */
  primaryCtaUrl?: string;
  /**
   * @description Hero background image
   */
  backgroundImage?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

export default function Hero({
  title = "The best customer experiences",
  subtitle = "Zendesk provides the complete customer service solution that's easy to use and scales with your business",
  primaryCta = "Free trial",
  primaryCtaUrl = "#",
  backgroundImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  backgroundColor = "#e0f2f1",
  textColor = "#1f2937",
}: Props) {
  return (
    <div class="hero py-16" style={{ backgroundColor }}>
      <div class="hero-content flex-col lg:flex-row-reverse max-w-[1140px] mx-auto">
        <img src={backgroundImage} class="w-full max-w-lg aspect-video object-cover rounded-lg shadow-1x1" alt="Hero" />
        <div>
          <h1 class="text-5xl font-bold" style={{ color: textColor }} dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p class="py-6" style={{ color: textColor }}>{subtitle}</p>
          <div>
            <a href={primaryCtaUrl} class="btn btn-primary">{primaryCta}</a>
          </div>
        </div>
      </div>
    </div>
  );
}