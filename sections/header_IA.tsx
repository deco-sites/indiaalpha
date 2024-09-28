import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description Logo image
   */
  logo?: ImageWidget;
  /**
   * @description Alternative text for the logo
   */
  logoAlt?: string;
}

export default function Header({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logoAlt = "Company Logo"
}: Props) {
  return (
    <header class="bg-base-100 p-4">
      <div class="container mx-auto px-4">
        <div class="flex justify-start">
          <img
            src={logo}
            alt={logoAlt}
            class="w-[100px] h-[200px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}