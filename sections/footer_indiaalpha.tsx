import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description The logo image for the footer
   */
  logo?: ImageWidget;
  /**
   * @description The alt text for the logo
   */
  logoAlt?: string;
  /**
   * @description The text for the CTA button
   */
  ctaText?: string;
  /**
   * @description The URL for the CTA button
   */
  ctaUrl?: string;
  /**
   * @format color-input
   * @description The background color of the footer
   */
  backgroundColor?: string;
  /**
   * @format color-input
   * @description The text color of the footer
   */
  textColor?: string;
}

export default function Footer({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logoAlt = "Company Logo",
  ctaText = "Get Started",
  ctaUrl = "#",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
}: Props) {
  return (
    <footer style={{ backgroundColor, color: textColor }} class="py-8">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <img src={logo} alt={logoAlt} class="h-12" />
        </div>
        <div>
          <a
            href={ctaUrl}
            class="btn btn-primary"
            style={{ backgroundColor: textColor, color: backgroundColor }}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </footer>
  );
}