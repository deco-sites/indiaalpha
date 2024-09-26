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
   * @description The copyright text
   * @format rich-text
   */
  copyrightText?: string;
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

export default function SimpleFooter({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logoAlt = "Company Logo",
  copyrightText = "© 2024 Your Company. All rights reserved.",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
}: Props) {
  return (
    <footer style={{ backgroundColor, color: textColor }} class="py-6">
      <div class="container mx-auto px-4 flex flex-col items-center">
        <img src={logo} alt={logoAlt} class="w-[150px] h-[150px] object-contain mb-4" />
        <div class="text-sm text-center" dangerouslySetInnerHTML={{ __html: copyrightText }} />
      </div>
    </footer>
  );
}